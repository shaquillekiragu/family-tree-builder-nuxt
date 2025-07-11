interface IGeneration {
  treeId: number;
  orderIndex: number;
}

class Generation implements IGeneration {
  treeId: number;
  orderIndex: number;

  constructor(treeId: number, orderIndex: number) {
    this.treeId = treeId;
    this.orderIndex = orderIndex;
  }

  createNewGeneration() {}
}
