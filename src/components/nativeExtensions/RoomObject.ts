/**
 * Created by neona on 7/21/2017.
 */

RoomObject.prototype.canBuild = function(): boolean {
  return this.room.canBuild();
};

RoomObject.prototype.needsToRepair = function(minHealthPercent: number): boolean {
  if(minHealthPercent == null) let minHealthPercent = 0.7;
  return this.room.needsToRepair(minHealthPercent);
};

RoomObject.prototype.memory = function(): Object {
  if(!Memory[this.id]) Memory[this.id] = {};
  return Memory[this.id];
};
