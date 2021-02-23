tiles.setTilemap(tilemap`level1`)
let StuCell = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . f f f f f f f f f . . . . 
    . . . f 1 1 1 1 1 1 1 f . . . . 
    . . . f 8 1 8 8 1 8 1 f . . . . 
    . . . f 1 1 1 1 1 1 1 f . . . . 
    . . . f 1 5 1 4 1 1 1 f . . . . 
    . . . f 1 1 1 1 1 1 1 f . . . . 
    . . . f 8 8 1 8 1 1 1 f . . . . 
    . . . f 1 1 1 1 1 1 1 f . . . . 
    . . . f 1 2 1 2 1 1 1 f . . . . 
    . . . f 1 1 1 1 1 1 1 f . . . . 
    . . . f 1 1 1 1 1 1 1 f . . . . 
    . . . f 1 1 1 1 1 1 1 f . . . . 
    . . . f f f f f f f f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(StuCell)
tiles.placeOnRandomTile(StuCell, sprites.dungeon.darkGroundWest)
scene.cameraFollowSprite(StuCell)
let Teacher = sprites.create(img`
    . . . . f f f f . . . . 
    . . f f e e e e f f . . 
    . f f e e e e e e f f . 
    f f f f 4 e e e f f f f 
    f f f 4 4 4 e e f f f f 
    f f f 4 4 4 4 e e f f f 
    f 4 e 4 4 4 4 4 4 e 4 f 
    f 4 4 f f 4 4 f f 4 4 f 
    f e 4 d d d d d d 4 e f 
    . f e d d b b d d e f . 
    . f f e 4 4 4 4 e f f . 
    e 4 f b 1 1 1 1 b f 4 e 
    4 d f 1 1 1 1 1 1 f d 4 
    4 4 f 6 6 6 6 6 6 f 4 4 
    . . . f f f f f f . . . 
    . . . f f . . f f . . . 
    `, SpriteKind.Enemy)
