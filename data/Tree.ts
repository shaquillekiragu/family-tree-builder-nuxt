interface ITree {
  treeId: number;
  userId: number;
  treeName: string;
  treePassword: string;
  createdBy: string;
  createdAt: string;
}

class Tree implements ITree {
  treeId: number;
  userId: number;
  treeName: string;
  treePassword: string;
  createdBy: string;
  createdAt: string;

  constructor(
    treeId: number,
    userId: number,
    treeName: string,
    treePassword: string,
    createdBy: string,
    createdAt: string
  ) {
    this.treeId = treeId;
    this.userId = userId;
    this.treeName = treeName;
    this.treePassword = treePassword;
    this.createdBy = createdBy;
    this.createdAt = createdAt;
  }

  createNewGeneration() {}
}
