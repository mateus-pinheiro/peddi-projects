"use strict";
// const { BaseDTO, fields } = require('dtox')
Object.defineProperty(exports, "__esModule", { value: true });
// Define order mapping
// const ORDER_MAPPING = {
//     table: Number(),
//     guests: Number(),
//     amount_price: Number(),
//     status: Number(),
//     restaurant_id_cloud: Number(),
//     // waiter: fields.WaiterDTO()
// };
// const WAITER_MAPPING = {
//     cloud_id: fields.number(),
//     mgmt_id: fields.string(),
//     name: fields.string()
// };
// // Define a DTO which represents a single order
// export default class OrderDTO extends BaseDTO {
//     constructor(data: any) {
//         super(data, ORDER_MAPPING);
//     }
// }
// class WaiterDTO extends BaseDTO {
//     constructor(data: any) {
//       super(data, WAITER_MAPPING);
//     }
// }
class OrderDTO {
    // waiter: fields.WaiterDTO()
    constructor(incoming) {
        this.table = incoming.table;
        this.status = incoming.status;
        this.restaurant_id_cloud = incoming.restaurant_id_cloud;
        this.guests = incoming.guests;
        this.amount_price = incoming.amount_price;
    }
}
exports.default = OrderDTO;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcGktY29yZS9jb21tb25zL2R0by9vcmRlci5kdG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDhDQUE4Qzs7QUFFOUMsdUJBQXVCO0FBQ3ZCLDBCQUEwQjtBQUMxQix1QkFBdUI7QUFDdkIsd0JBQXdCO0FBQ3hCLDhCQUE4QjtBQUM5Qix3QkFBd0I7QUFDeEIscUNBQXFDO0FBQ3JDLG9DQUFvQztBQUNwQyxLQUFLO0FBRUwsMkJBQTJCO0FBQzNCLGlDQUFpQztBQUNqQyxnQ0FBZ0M7QUFDaEMsNEJBQTRCO0FBQzVCLEtBQUs7QUFFTCxrREFBa0Q7QUFDbEQsa0RBQWtEO0FBQ2xELCtCQUErQjtBQUMvQixzQ0FBc0M7QUFDdEMsUUFBUTtBQUNSLElBQUk7QUFFSixvQ0FBb0M7QUFDcEMsK0JBQStCO0FBQy9CLHFDQUFxQztBQUNyQyxRQUFRO0FBQ1IsSUFBSTtBQUVKLE1BQXFCLFFBQVE7SUFPekIsNkJBQTZCO0lBRTdCLFlBQVksUUFBa0I7UUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUM5QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsUUFBUSxDQUFDLG1CQUFtQixDQUFDO1FBQ3hELElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUM5QixJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUM7SUFDOUMsQ0FBQztDQUVKO0FBakJELDJCQWlCQyIsImZpbGUiOiJhcGktY29yZS9jb21tb25zL2R0by9vcmRlci5kdG8uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCB7IEJhc2VEVE8sIGZpZWxkcyB9ID0gcmVxdWlyZSgnZHRveCcpXG5cbi8vIERlZmluZSBvcmRlciBtYXBwaW5nXG4vLyBjb25zdCBPUkRFUl9NQVBQSU5HID0ge1xuLy8gICAgIHRhYmxlOiBOdW1iZXIoKSxcbi8vICAgICBndWVzdHM6IE51bWJlcigpLFxuLy8gICAgIGFtb3VudF9wcmljZTogTnVtYmVyKCksXG4vLyAgICAgc3RhdHVzOiBOdW1iZXIoKSxcbi8vICAgICByZXN0YXVyYW50X2lkX2Nsb3VkOiBOdW1iZXIoKSxcbi8vICAgICAvLyB3YWl0ZXI6IGZpZWxkcy5XYWl0ZXJEVE8oKVxuLy8gfTtcblxuLy8gY29uc3QgV0FJVEVSX01BUFBJTkcgPSB7XG4vLyAgICAgY2xvdWRfaWQ6IGZpZWxkcy5udW1iZXIoKSxcbi8vICAgICBtZ210X2lkOiBmaWVsZHMuc3RyaW5nKCksXG4vLyAgICAgbmFtZTogZmllbGRzLnN0cmluZygpXG4vLyB9O1xuXG4vLyAvLyBEZWZpbmUgYSBEVE8gd2hpY2ggcmVwcmVzZW50cyBhIHNpbmdsZSBvcmRlclxuLy8gZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXJEVE8gZXh0ZW5kcyBCYXNlRFRPIHtcbi8vICAgICBjb25zdHJ1Y3RvcihkYXRhOiBhbnkpIHtcbi8vICAgICAgICAgc3VwZXIoZGF0YSwgT1JERVJfTUFQUElORyk7XG4vLyAgICAgfVxuLy8gfVxuXG4vLyBjbGFzcyBXYWl0ZXJEVE8gZXh0ZW5kcyBCYXNlRFRPIHtcbi8vICAgICBjb25zdHJ1Y3RvcihkYXRhOiBhbnkpIHtcbi8vICAgICAgIHN1cGVyKGRhdGEsIFdBSVRFUl9NQVBQSU5HKTtcbi8vICAgICB9XG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVyRFRPIHtcblxuICAgIHB1YmxpYyB0YWJsZTogTnVtYmVyO1xuICAgIHB1YmxpYyBndWVzdHM6IE51bWJlcjtcbiAgICBwdWJsaWMgYW1vdW50X3ByaWNlOiBOdW1iZXI7XG4gICAgcHVibGljIHN0YXR1czogTnVtYmVyO1xuICAgIHB1YmxpYyByZXN0YXVyYW50X2lkX2Nsb3VkOiBOdW1iZXI7XG4gICAgLy8gd2FpdGVyOiBmaWVsZHMuV2FpdGVyRFRPKClcblxuICAgIGNvbnN0cnVjdG9yKGluY29taW5nOiBPcmRlckRUTykge1xuICAgICAgICB0aGlzLnRhYmxlID0gaW5jb21pbmcudGFibGU7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gaW5jb21pbmcuc3RhdHVzO1xuICAgICAgICB0aGlzLnJlc3RhdXJhbnRfaWRfY2xvdWQgPSBpbmNvbWluZy5yZXN0YXVyYW50X2lkX2Nsb3VkO1xuICAgICAgICB0aGlzLmd1ZXN0cyA9IGluY29taW5nLmd1ZXN0cztcbiAgICAgICAgdGhpcy5hbW91bnRfcHJpY2UgPSBpbmNvbWluZy5hbW91bnRfcHJpY2U7XG4gICAgfVxuXG59XG5cblxuXG4iXX0=
