export function taskHarvest(creep: Creep) {
  taskHarvestInit(creep);

  if(creep.memory.task.harvest.timer != 0) {
    creep.memory.task.harvest.timer--;

    creep.moveTo(Game.getObjectById(creep.target));
  } else if(creep.moveTo(Game.getObjectById(creep.target)) == ERR_NOT_IN_RANGE) {

  }


}

export function taskHarvestInit(creep: Creep) {
  if(creep.memory.task == null) {
    creep.memory.task = {};
  }
  if(creep.memory.task.harvest == null) {
    creep.memory.task.harvest = {};
  }
  if(creep.memory.task.harvest.timer == null) {
    creep.memory.task.harvest.timer = 0;
  }
}
