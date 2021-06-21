"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var InMemoryDatabase = /*#__PURE__*/function () {
  function InMemoryDatabase() {
    _classCallCheck(this, InMemoryDatabase);

    _defineProperty(this, "db", {});
  }

  _createClass(InMemoryDatabase, [{
    key: "set",
    value: function set(newValue) {
      this.db[newValue.id] = newValue;
    }
  }, {
    key: "get",
    value: function get(id) {
      return this.db[id];
    }
  }]);

  return InMemoryDatabase;
}();

var peopleDB = new InMemoryDatabase();
peopleDB.set({
  id: "9",
  name: "bob bobber",
  job: "bobberlator"
});
console.log(peopleDB.get("9"));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJJbk1lbW9yeURhdGFiYXNlIiwibmV3VmFsdWUiLCJkYiIsImlkIiwicGVvcGxlREIiLCJzZXQiLCJuYW1lIiwiam9iIiwiY29uc29sZSIsImxvZyIsImdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQWVNQSxnQjs7OztnQ0FDNEIsRTs7Ozs7V0FFaEMsYUFBV0MsUUFBWCxFQUE4QjtBQUM1QixXQUFLQyxFQUFMLENBQVFELFFBQVEsQ0FBQ0UsRUFBakIsSUFBdUJGLFFBQXZCO0FBQ0Q7OztXQUNELGFBQVdFLEVBQVgsRUFBc0M7QUFDcEMsYUFBTyxLQUFLRCxFQUFMLENBQVFDLEVBQVIsQ0FBUDtBQUNEOzs7Ozs7QUFHSCxJQUFNQyxRQUFRLEdBQUcsSUFBSUosZ0JBQUosRUFBakI7QUFFQUksUUFBUSxDQUFDQyxHQUFULENBQWE7QUFDWEYsRUFBQUEsRUFBRSxFQUFFLEdBRE87QUFFWEcsRUFBQUEsSUFBSSxFQUFFLFlBRks7QUFHWEMsRUFBQUEsR0FBRyxFQUFFO0FBSE0sQ0FBYjtBQU1BQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUwsUUFBUSxDQUFDTSxHQUFULENBQWEsR0FBYixDQUFaIiwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIFBlcnNvbiB7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgam9iOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBJZGVudGlmaWFibGUge1xuICBpZDogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgRGF0YWJhc2U8VCBleHRlbmRzIElkZW50aWZpYWJsZT4ge1xuICBzZXQobmV3VmFsdWU6IFQpOiB2b2lkO1xuICBnZXQoaWQ6IHN0cmluZyk6IFQgfCB1bmRlZmluZWQ7XG59XG5cbmNsYXNzIEluTWVtb3J5RGF0YWJhc2U8VCBleHRlbmRzIElkZW50aWZpYWJsZT4gaW1wbGVtZW50cyBEYXRhYmFzZTxUPiB7XG4gIHByaXZhdGUgZGI6IFJlY29yZDxzdHJpbmcsIFQ+ID0ge307XG5cbiAgcHVibGljIHNldChuZXdWYWx1ZTogVCk6IHZvaWQge1xuICAgIHRoaXMuZGJbbmV3VmFsdWUuaWRdID0gbmV3VmFsdWU7XG4gIH1cbiAgcHVibGljIGdldChpZDogc3RyaW5nKTogVCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuZGJbaWRdO1xuICB9XG59XG5cbmNvbnN0IHBlb3BsZURCID0gbmV3IEluTWVtb3J5RGF0YWJhc2U8UGVyc29uPigpO1xuXG5wZW9wbGVEQi5zZXQoe1xuICBpZDogXCI5XCIsXG4gIG5hbWU6IFwiYm9iIGJvYmJlclwiLFxuICBqb2I6IFwiYm9iYmVybGF0b3JcIixcbn0pO1xuXG5jb25zb2xlLmxvZyhwZW9wbGVEQi5nZXQoXCI5XCIpKTtcbiJdfQ==