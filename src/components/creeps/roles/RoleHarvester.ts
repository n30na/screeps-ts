
export class RoleHarvester extends Creep {

  protected _target: RoomObject;

  public get task():string {
    if(this.memory.harvesterTask) return this.memory.harvesterTask;
    else return "";
  }
  public get target():RoomObject | null {
    if(this._target == null) {
      this._target = Game.getObjectById(this.targetId);
    }
    return this._target;
  }
  public get timer(): number {
    if(this.memory.harvesterTime) return this.memory.harvesterTime;
    else return 0;
  }
  public get working(): boolean {
    if(this.memory.harvesterWorking) return this.memory.harvesterWorking;
    else return false;
  }
  public get targetId(): string {
    if(this.memory.harvesterTargetId) return this.memory.harvesterTargetId;
    else return "";
  }

  private set task(task: string) {
    this.memory.harvesterTast = task;
  }
  // private set target(target: string) {
  //   this.memory.harvesterTarget = target;
  // }
  private set timer(time: number) {
    this.memory.harvesterTimer = time;
  }
  private set working(state: boolean) {
    this.memory.harvesterWorking = state;
  }
  private set targetId(id: string) {
    this.memory.harvesterTargetId = id;
  }

  public run(): number {
    if(this.working) {

    } else {

    }
  }
  public reset() {
    this.working = false;
    this.target = "";
    this.task = "";
    this.timer = 0;
  }
  private chooseTask():string {

    if(this.energy < this.carryCapacity * 0.1 ) {
      //TODO start harvesting
      return "harvest";
    }
    if(this.room.controller.ticksToDowngrade <= 2000) {
      //TODO start upgrading
      return "upgrade";
    }
    if(this.room.energyAvailable < this.room.energyCapacityAvailable) {
      //TODO start filling
      return "fill";
    }
    if(this.needsToRepair) {
      //TODO start repairing
      return "repair";
    }
    if(this.canBuild) {
      //TODO start building
      return "building";
    }

    //TODO start upgrading
    return "upgrading";
  }
}
