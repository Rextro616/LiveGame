export const drawEntity = function(ctx: any, something: any){
    ctx.save();
    ctx.fillStyle = something.color;
    ctx.fillRect(something.x-something.width/2,something.y-something.height/2,something.width,something.height);
    ctx.restore();
}