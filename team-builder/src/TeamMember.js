// simulate a static class property
// holds last ID assigned
let _lastID = 0;

export default class TeamMember {
  constructor (name, email, role) {
    this.id = this._nextID();
    this.name = name;
    this.email = email;
    this.role = role;
  }

  _nextID() {
    _lastID++;
    return _lastID;
  }
}
