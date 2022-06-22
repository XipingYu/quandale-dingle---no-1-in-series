scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairSouth, function (sprite, location) {
    game.over(true)
})
music.playMelody("E B C5 A B G A F ", 211)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f f f f f f f f f . . . 
    . . . . f f e f e e f f f . . . 
    . . . . . e e e e e e e . . . . 
    . . . . e 2 e 2 e e e e e . . . 
    . . . e e e e e e e e e e . . . 
    . . e f e e e e e e e e . . . . 
    . . . . . e e e e e e e . . . . 
    . . . . . . f f f e e . . . . . 
    . . . . . . . e e e . . . . . . 
    . . e . . . . . e . . . . e . . 
    . . e e e e e e e e e e e e . . 
    . . . . . . . . e . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.floorLight0)
scene.cameraFollowSprite(mySprite)
info.startCountdown(10)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . e e e . . . . . . 
    . . . . . e e e e e e e . . . . 
    . . . . e e e d d d d e e . . . 
    . . . . e d d d d d d d e . . . 
    . . . . e d 6 d d d 6 d e . . . 
    . . . . . d d d 3 d d d e . . . 
    . . . . . d d d 3 d d d . . . . 
    . . . . . d d 3 3 3 d d . . . . 
    . . . . . d d d 3 d d d . . . . 
    . . . . . . d f f f d . . . . . 
    . . 7 7 7 . d f d f d . . . . . 
    . . 7 . . . . . 7 . . . . . . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . . . . . . . 7 . . . . 7 . . 
    . . . . . . . . 7 . . . 7 7 . . 
    `, SpriteKind.Enemy)
let mySprite3 = sprites.create(img`
    . . . . f f f f f f f . . . . . 
    . . . . f f e e e f f f . . . . 
    . . . . f e e e e e e f . . . . 
    . . . . f e 1 1 e 1 1 f . . . . 
    . . . . f e 1 f e 1 f f . . . . 
    . . . . f e e e e e e f . . . . 
    . . . . . e e e f e e . . . . . 
    . . . . . e e e f e . . . . . . 
    . . . . . . e f f f . . . . . . 
    . . . . . . e e f e . . . . . . 
    . . . . . . e e e e . . . . . . 
    . . . . . . e 1 f 1 . . . . . . 
    . . . . . . . e e e . . . . . . 
    . . . . . . . e e . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let mySprite4 = sprites.create(img`
    . . . 4 . . 4 . 4 4 . . . . . . 
    . . . 4 4 4 4 . 4 4 . . . . . . 
    . . . 4 4 4 4 4 4 4 . . . . . . 
    . . . 4 4 4 4 4 4 4 . . . . . . 
    . . . 4 4 5 5 5 4 5 . . . . . . 
    . . 4 4 5 5 5 5 5 5 . . . . . . 
    . . 4 4 1 1 1 5 1 1 1 . . . . . 
    . . . 5 f 1 1 5 f 1 1 . . . . . 
    . . . 5 1 1 1 5 1 1 1 . . . . . 
    . . 5 5 5 5 5 5 5 5 5 5 . . . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
    . . 5 5 5 5 3 5 5 5 5 3 3 5 . . 
    . . . 5 5 5 5 3 3 3 3 3 3 3 . . 
    . . . 5 5 5 5 5 . . . 3 3 . . . 
    . . . 5 5 5 5 5 . . . . . . . . 
    . . . 5 5 5 5 5 . . . . . . . . 
    `, SpriteKind.Enemy)
mySprite2.follow(mySprite3, 30)
mySprite3.follow(mySprite, 100)
mySprite4.follow(mySprite2, 70)
