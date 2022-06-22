// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`10001000030b04040404040b0404040404111105010909090a0909090f0909090909090d010909090a0909090f0909090909090601090a0a04040b04040909010b040906010909090109090909090901091009060e0909090e090909090909010910090601090909010909090109090e090d090601090909080c0909010909010910090d01090909090109090e0909010910090601090909090e08080109090e09100906010909090909090901090909091009060e090909090909090e0909090910090601090909080c080801090909090d09100109090909090909090909090910090d010909090909090809090908081009060212121208080808080c080808080807`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 
2 . . . . . . . 2 . . . . . . 2 
2 . . . . . . . 2 . . . . . . 2 
2 . . . 2 2 2 2 2 . . 2 2 2 . 2 
2 . . . 2 . . . . . . 2 . 2 . 2 
2 . . . 2 . . . . . . 2 . 2 . 2 
2 . . . 2 . . . 2 . . 2 . 2 . 2 
2 . . . 2 2 . . 2 . . 2 . 2 . 2 
2 . . . . 2 . . 2 . . 2 . 2 . 2 
2 . . . . 2 2 2 2 . . 2 . 2 . 2 
2 . . . . . . . 2 . . . . 2 . 2 
2 . . . . . . . 2 . . . . 2 . 2 
2 . . . 2 2 2 2 2 . . . . 2 . 2 
2 . . . . . . . . . . . . 2 . 2 
2 . . . . . . 2 . . . 2 2 2 . 2 
2 . . . 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth0,sprites.dungeon.darkGroundSouthEast1,sprites.dungeon.darkGroundSouthWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterWest2,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterEast1,sprites.dungeon.stairSouth,sprites.dungeon.floorLight0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
