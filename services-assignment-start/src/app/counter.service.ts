export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToactiveCounter = 0;

  incrementActivetToInactive() {
    this.activeToInactiveCounter++;
    console.log('Active to Inactive: ' + this.activeToInactiveCounter);
  }

  incrementInactivetToactive() {
    this.inactiveToactiveCounter++;
    console.log('InActive to Active: ' + this.inactiveToactiveCounter);
  }
}
