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
    constructor() {
        this.table = 0;
        this.guests = 0;
        this.amount_price = 0;
        this.status = 0;
        this.restaurant_id_cloud = 0;
        // waiter: fields.WaiterDTO()
        // constructor(table : Number, guests: Number, amount_price: Number, status: Number, restaurant_id_cloud: Number) {
        //     this.table = table;
        //     this.status = status;
        //     this.restaurant_id_cloud = restaurant_id_cloud;
        //     this.guests = guests;
        //     this.amount_price = amount_price;
        // }   
    }
}
exports.default = OrderDTO;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcGktY29yZS9jb21tb25zL2R0by9vcmRlci5kdG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDhDQUE4Qzs7QUFFOUMsdUJBQXVCO0FBQ3ZCLDBCQUEwQjtBQUMxQix1QkFBdUI7QUFDdkIsd0JBQXdCO0FBQ3hCLDhCQUE4QjtBQUM5Qix3QkFBd0I7QUFDeEIscUNBQXFDO0FBQ3JDLG9DQUFvQztBQUNwQyxLQUFLO0FBRUwsMkJBQTJCO0FBQzNCLGlDQUFpQztBQUNqQyxnQ0FBZ0M7QUFDaEMsNEJBQTRCO0FBQzVCLEtBQUs7QUFFTCxrREFBa0Q7QUFDbEQsa0RBQWtEO0FBQ2xELCtCQUErQjtBQUMvQixzQ0FBc0M7QUFDdEMsUUFBUTtBQUNSLElBQUk7QUFFSixvQ0FBb0M7QUFDcEMsK0JBQStCO0FBQy9CLHFDQUFxQztBQUNyQyxRQUFRO0FBQ1IsSUFBSTtBQUVKLE1BQXFCLFFBQVE7SUFBN0I7UUFFVyxVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLFdBQU0sR0FBVyxDQUFDLENBQUM7UUFDbkIsaUJBQVksR0FBVSxDQUFDLENBQUM7UUFDeEIsV0FBTSxHQUFXLENBQUMsQ0FBQztRQUNuQix3QkFBbUIsR0FBVyxDQUFDLENBQUM7UUFDdkMsNkJBQTZCO1FBRTdCLG1IQUFtSDtRQUNuSCwwQkFBMEI7UUFDMUIsNEJBQTRCO1FBQzVCLHNEQUFzRDtRQUN0RCw0QkFBNEI7UUFDNUIsd0NBQXdDO1FBQ3hDLE9BQU87SUFFWCxDQUFDO0NBQUE7QUFqQkQsMkJBaUJDIiwiZmlsZSI6ImFwaS1jb3JlL2NvbW1vbnMvZHRvL29yZGVyLmR0by5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IHsgQmFzZURUTywgZmllbGRzIH0gPSByZXF1aXJlKCdkdG94JylcblxuLy8gRGVmaW5lIG9yZGVyIG1hcHBpbmdcbi8vIGNvbnN0IE9SREVSX01BUFBJTkcgPSB7XG4vLyAgICAgdGFibGU6IE51bWJlcigpLFxuLy8gICAgIGd1ZXN0czogTnVtYmVyKCksXG4vLyAgICAgYW1vdW50X3ByaWNlOiBOdW1iZXIoKSxcbi8vICAgICBzdGF0dXM6IE51bWJlcigpLFxuLy8gICAgIHJlc3RhdXJhbnRfaWRfY2xvdWQ6IE51bWJlcigpLFxuLy8gICAgIC8vIHdhaXRlcjogZmllbGRzLldhaXRlckRUTygpXG4vLyB9O1xuXG4vLyBjb25zdCBXQUlURVJfTUFQUElORyA9IHtcbi8vICAgICBjbG91ZF9pZDogZmllbGRzLm51bWJlcigpLFxuLy8gICAgIG1nbXRfaWQ6IGZpZWxkcy5zdHJpbmcoKSxcbi8vICAgICBuYW1lOiBmaWVsZHMuc3RyaW5nKClcbi8vIH07XG5cbi8vIC8vIERlZmluZSBhIERUTyB3aGljaCByZXByZXNlbnRzIGEgc2luZ2xlIG9yZGVyXG4vLyBleHBvcnQgZGVmYXVsdCBjbGFzcyBPcmRlckRUTyBleHRlbmRzIEJhc2VEVE8ge1xuLy8gICAgIGNvbnN0cnVjdG9yKGRhdGE6IGFueSkge1xuLy8gICAgICAgICBzdXBlcihkYXRhLCBPUkRFUl9NQVBQSU5HKTtcbi8vICAgICB9XG4vLyB9XG5cbi8vIGNsYXNzIFdhaXRlckRUTyBleHRlbmRzIEJhc2VEVE8ge1xuLy8gICAgIGNvbnN0cnVjdG9yKGRhdGE6IGFueSkge1xuLy8gICAgICAgc3VwZXIoZGF0YSwgV0FJVEVSX01BUFBJTkcpO1xuLy8gICAgIH1cbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXJEVE8ge1xuXG4gICAgcHVibGljIHRhYmxlOiBOdW1iZXIgPSAwO1xuICAgIHB1YmxpYyBndWVzdHM6IE51bWJlciA9IDA7XG4gICAgcHVibGljIGFtb3VudF9wcmljZTogTnVtYmVyPSAwO1xuICAgIHB1YmxpYyBzdGF0dXM6IE51bWJlciA9IDA7XG4gICAgcHVibGljIHJlc3RhdXJhbnRfaWRfY2xvdWQ6IE51bWJlciA9IDA7XG4gICAgLy8gd2FpdGVyOiBmaWVsZHMuV2FpdGVyRFRPKClcblxuICAgIC8vIGNvbnN0cnVjdG9yKHRhYmxlIDogTnVtYmVyLCBndWVzdHM6IE51bWJlciwgYW1vdW50X3ByaWNlOiBOdW1iZXIsIHN0YXR1czogTnVtYmVyLCByZXN0YXVyYW50X2lkX2Nsb3VkOiBOdW1iZXIpIHtcbiAgICAvLyAgICAgdGhpcy50YWJsZSA9IHRhYmxlO1xuICAgIC8vICAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgICAvLyAgICAgdGhpcy5yZXN0YXVyYW50X2lkX2Nsb3VkID0gcmVzdGF1cmFudF9pZF9jbG91ZDtcbiAgICAvLyAgICAgdGhpcy5ndWVzdHMgPSBndWVzdHM7XG4gICAgLy8gICAgIHRoaXMuYW1vdW50X3ByaWNlID0gYW1vdW50X3ByaWNlO1xuICAgIC8vIH0gICBcblxufVxuXG5cblxuIl19
