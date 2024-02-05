class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene")
    }

preload() {
    // load images/title sprites
    this.load.image('rocket', './assests/rocket.png')
    this.load.image('spaceship', './assests/spaceship.png')
    this.load.image('starfield', './assests/starfield.png')
    // load spritesheet
    this.load.spritesheet('explosion', './assests/explosion.png', {
        frameWidth: 64,
        frameHeight: 32,
        startFrame: 0,
        endFrame: 9
    })
    // load audio
    this.load.audio('sfx-select', './assests/sfx-select.wav')
    this.load.audio('sfx-explosion', './assests/sfx-explosion.wav')
    this.load.audio('sfx-shot', './assests/sfx-shot.wav')
}

    create() {
        // animation config
    this.anims.create({
    key: 'explode',
    frames: this.anims.generateFrameNumbers('explosion', { start: 0, end: 9, first: 0}),
    frameRate: 30
    })
        //this.add.text(20, 20, "Rocket Patrol Play")
        //this.scene.start("playScene")

        // display score
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            allign: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        // display menu text
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'ROCKET PATROL', menuConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2, 'Use <-- --> arrows to move & (F) to fire', menuConfig).setOrigin(0.5)
        menuConfig.backroundColor = '#00FF00'
        menuConfig.color = '#00FF00'
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press <-- for Novice or --> for Expert', menuConfig).setOrigin(0.5)
    
        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            // easy mode
            game.settings = {
                spaceshipSpeed: 3,
                gameTimer: 60000
            }
            this.sound.play('sfx-select')
            this.scene.start('playScene')
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            // hard mode
            game.settings = {
                spaceshipSpeed: 4,
                gameTimer: 60000
            }
            this.sound.play('sfx-select')
            this.scene.start('playScene')
        }
    }
}