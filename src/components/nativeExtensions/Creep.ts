Creep.prototype.actionHarvest = function(sourceId: string): number {

};

Creep.prototype.taskHarvest = function (): number {

};

Creep.prototype.taskFill = function (): number {

};

Creep.prototype.taskUpgrade = function (): number {

};

Creep.prototype.taskRepair = function (): number {

};

Creep.prototype.taskBuild = function (): number {

};

Creep.prototype.run = function() {};  // Dummy run function for interfacing, should never be run - TODO add logging to track if this is ever called

Creep.prototype.energy = function(): number { //Alias for ease of use
  return this.carry[RESOURCE_ENERGY];
};

Creep.prototype.target = function()
