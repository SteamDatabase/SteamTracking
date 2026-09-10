var _ = class {
  async GetObject(_) {
    try {
      let _ = await this.GetString(_);
      return _ ? JSON.parse(_) : null;
    } catch {
      return null;
    }
  }
  async StoreObject(_, _) {
    return this.StoreString(_, JSON.stringify(_));
  }
};
export { _ };
