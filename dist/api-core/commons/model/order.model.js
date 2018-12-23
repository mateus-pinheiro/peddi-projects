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
class OrderModel {
    constructor(incoming) {
        this.mongo_id = incoming.mongo_id;
        this.table = incoming.table;
        this.guests = incoming.guests;
        this.order_price = incoming.order_price;
        this.status = incoming.status;
        this.restaurant_id = incoming.restaurant_id;
        this.waiter_mgmt_id = incoming.waiter_mgmt_id;
        this.created_at = incoming.created_at;
        this.updated_at = incoming.updated_at;
        this.consumers = incoming.consumers;
    }
}
exports.default = OrderModel;
class ConsumerModel {
    constructor(incoming) {
        this.card = incoming.card;
        this.items = incoming.items;
    }
}
exports.ConsumerModel = ConsumerModel;
class ItemModel {
    constructor(incoming) {
        this.base_mgmt_id = incoming.base_mgmt_id;
        this.item_price = incoming.item_price;
        this.ingredients = incoming.ingredients;
    }
}
exports.ItemModel = ItemModel;
class IngredientModel {
    constructor(incoming) {
        this.ingredient_mgmt_id = incoming.ingredient_mgmt_id;
        this.action = incoming.action;
        this.ingredient_price = incoming.ingredient_price;
    }
}
exports.IngredientModel = IngredientModel;
//Contract
// {  
//     "table":3,
//     "guests":2,
//     "amount_price":66.30,
//     "status":1,
//     "restaurant_id_cloud":1,
//     "waiter_id_cloud":1,
//     "created_at":"12/02/2018 12:50",
//     "updated_at":"12/02/2018 12:51",
//     "consumers":[  
//        {  
//           "cloud_id":508,
//           "items":[  
//              {  
//                 "cloud_id":33,
//                 "ingredients":null
//              },
//              {  
//                 "cloud_id":101,
//                 "ingredients":null
//              }
//           ]
//        },
//        {  
//           "cloud_id":603,
//           "items":[  
//              {  
//                 "cloud_id":10,
//                 "ingredients":[  
//                    1
//                 ]
//              },
//              {  
//                 "cloud_id":71,
//                 "ingredients":[  
//                    5,
//                    14
//                 ]
//              }
//           ]
//        }
//     ]
//  }

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcGktY29yZS9jb21tb25zL21vZGVsL29yZGVyLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw4Q0FBOEM7O0FBRTlDLHVCQUF1QjtBQUN2QiwwQkFBMEI7QUFDMUIsdUJBQXVCO0FBQ3ZCLHdCQUF3QjtBQUN4Qiw4QkFBOEI7QUFDOUIsd0JBQXdCO0FBQ3hCLHFDQUFxQztBQUNyQyxvQ0FBb0M7QUFDcEMsS0FBSztBQUVMLDJCQUEyQjtBQUMzQixpQ0FBaUM7QUFDakMsZ0NBQWdDO0FBQ2hDLDRCQUE0QjtBQUM1QixLQUFLO0FBRUwsa0RBQWtEO0FBQ2xELGtEQUFrRDtBQUNsRCwrQkFBK0I7QUFDL0Isc0NBQXNDO0FBQ3RDLFFBQVE7QUFDUixJQUFJO0FBRUosb0NBQW9DO0FBQ3BDLCtCQUErQjtBQUMvQixxQ0FBcUM7QUFDckMsUUFBUTtBQUNSLElBQUk7QUFFSixNQUFxQixVQUFVO0lBWTNCLFlBQVksUUFBb0I7UUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUM5QixJQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUM7UUFDNUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDO1FBQzlDLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQztRQUN0QyxJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUM7UUFDdEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDO0lBRXhDLENBQUM7Q0FFSjtBQTFCRCw2QkEwQkM7QUFFRCxNQUFhLGFBQWE7SUFLdEIsWUFBWSxRQUF1QjtRQUMvQixJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO0lBQ2hDLENBQUM7Q0FFSjtBQVZELHNDQVVDO0FBRUQsTUFBYSxTQUFTO0lBTWxCLFlBQVksUUFBbUI7UUFDM0IsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDO1FBQzFDLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQztRQUN0QyxJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUM7SUFDNUMsQ0FBQztDQUVKO0FBWkQsOEJBWUM7QUFFRCxNQUFhLGVBQWU7SUFNeEIsWUFBWSxRQUF5QjtRQUNqQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsUUFBUSxDQUFDLGtCQUFrQixDQUFDO1FBQ3RELElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUM5QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDO0lBQ3RELENBQUM7Q0FFSjtBQVpELDBDQVlDO0FBR0QsVUFBVTtBQUNWLE1BQU07QUFDTixpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCLDRCQUE0QjtBQUM1QixrQkFBa0I7QUFDbEIsK0JBQStCO0FBQy9CLDJCQUEyQjtBQUMzQix1Q0FBdUM7QUFDdkMsdUNBQXVDO0FBQ3ZDLHNCQUFzQjtBQUN0QixhQUFhO0FBQ2IsNEJBQTRCO0FBQzVCLHdCQUF3QjtBQUN4QixtQkFBbUI7QUFDbkIsaUNBQWlDO0FBQ2pDLHFDQUFxQztBQUNyQyxrQkFBa0I7QUFDbEIsbUJBQW1CO0FBQ25CLGtDQUFrQztBQUNsQyxxQ0FBcUM7QUFDckMsaUJBQWlCO0FBQ2pCLGNBQWM7QUFDZCxZQUFZO0FBQ1osYUFBYTtBQUNiLDRCQUE0QjtBQUM1Qix3QkFBd0I7QUFDeEIsbUJBQW1CO0FBQ25CLGlDQUFpQztBQUNqQyxvQ0FBb0M7QUFDcEMsdUJBQXVCO0FBQ3ZCLG9CQUFvQjtBQUNwQixrQkFBa0I7QUFDbEIsbUJBQW1CO0FBQ25CLGlDQUFpQztBQUNqQyxvQ0FBb0M7QUFDcEMsd0JBQXdCO0FBQ3hCLHdCQUF3QjtBQUN4QixvQkFBb0I7QUFDcEIsaUJBQWlCO0FBQ2pCLGNBQWM7QUFDZCxXQUFXO0FBQ1gsUUFBUTtBQUNSLEtBQUsiLCJmaWxlIjoiYXBpLWNvcmUvY29tbW9ucy9tb2RlbC9vcmRlci5tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IHsgQmFzZURUTywgZmllbGRzIH0gPSByZXF1aXJlKCdkdG94JylcblxuLy8gRGVmaW5lIG9yZGVyIG1hcHBpbmdcbi8vIGNvbnN0IE9SREVSX01BUFBJTkcgPSB7XG4vLyAgICAgdGFibGU6IE51bWJlcigpLFxuLy8gICAgIGd1ZXN0czogTnVtYmVyKCksXG4vLyAgICAgYW1vdW50X3ByaWNlOiBOdW1iZXIoKSxcbi8vICAgICBzdGF0dXM6IE51bWJlcigpLFxuLy8gICAgIHJlc3RhdXJhbnRfaWRfY2xvdWQ6IE51bWJlcigpLFxuLy8gICAgIC8vIHdhaXRlcjogZmllbGRzLldhaXRlckRUTygpXG4vLyB9O1xuXG4vLyBjb25zdCBXQUlURVJfTUFQUElORyA9IHtcbi8vICAgICBjbG91ZF9pZDogZmllbGRzLm51bWJlcigpLFxuLy8gICAgIG1nbXRfaWQ6IGZpZWxkcy5zdHJpbmcoKSxcbi8vICAgICBuYW1lOiBmaWVsZHMuc3RyaW5nKClcbi8vIH07XG5cbi8vIC8vIERlZmluZSBhIERUTyB3aGljaCByZXByZXNlbnRzIGEgc2luZ2xlIG9yZGVyXG4vLyBleHBvcnQgZGVmYXVsdCBjbGFzcyBPcmRlckRUTyBleHRlbmRzIEJhc2VEVE8ge1xuLy8gICAgIGNvbnN0cnVjdG9yKGRhdGE6IGFueSkge1xuLy8gICAgICAgICBzdXBlcihkYXRhLCBPUkRFUl9NQVBQSU5HKTtcbi8vICAgICB9XG4vLyB9XG5cbi8vIGNsYXNzIFdhaXRlckRUTyBleHRlbmRzIEJhc2VEVE8ge1xuLy8gICAgIGNvbnN0cnVjdG9yKGRhdGE6IGFueSkge1xuLy8gICAgICAgc3VwZXIoZGF0YSwgV0FJVEVSX01BUFBJTkcpO1xuLy8gICAgIH1cbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXJNb2RlbCB7XG4gICAgcHVibGljIG1vbmdvX2lkPzogU3RyaW5nO1xuICAgIHB1YmxpYyB0YWJsZTogTnVtYmVyO1xuICAgIHB1YmxpYyBndWVzdHM6IE51bWJlcjtcbiAgICBwdWJsaWMgb3JkZXJfcHJpY2U6IE51bWJlcjtcbiAgICBwdWJsaWMgc3RhdHVzOiBOdW1iZXI7XG4gICAgcHVibGljIHJlc3RhdXJhbnRfaWQ6IE51bWJlcjtcbiAgICBwdWJsaWMgd2FpdGVyX21nbXRfaWQ6IE51bWJlcjtcbiAgICBwdWJsaWMgY3JlYXRlZF9hdDogU3RyaW5nO1xuICAgIHB1YmxpYyB1cGRhdGVkX2F0OiBTdHJpbmc7XG4gICAgcHVibGljIGNvbnN1bWVyczogQ29uc3VtZXJNb2RlbDtcblxuICAgIGNvbnN0cnVjdG9yKGluY29taW5nOiBPcmRlck1vZGVsKSB7XG4gICAgICAgIHRoaXMubW9uZ29faWQgPSBpbmNvbWluZy5tb25nb19pZDtcbiAgICAgICAgdGhpcy50YWJsZSA9IGluY29taW5nLnRhYmxlO1xuICAgICAgICB0aGlzLmd1ZXN0cyA9IGluY29taW5nLmd1ZXN0cztcbiAgICAgICAgdGhpcy5vcmRlcl9wcmljZSA9IGluY29taW5nLm9yZGVyX3ByaWNlO1xuICAgICAgICB0aGlzLnN0YXR1cyA9IGluY29taW5nLnN0YXR1cztcbiAgICAgICAgdGhpcy5yZXN0YXVyYW50X2lkID0gaW5jb21pbmcucmVzdGF1cmFudF9pZDtcbiAgICAgICAgdGhpcy53YWl0ZXJfbWdtdF9pZCA9IGluY29taW5nLndhaXRlcl9tZ210X2lkO1xuICAgICAgICB0aGlzLmNyZWF0ZWRfYXQgPSBpbmNvbWluZy5jcmVhdGVkX2F0O1xuICAgICAgICB0aGlzLnVwZGF0ZWRfYXQgPSBpbmNvbWluZy51cGRhdGVkX2F0O1xuICAgICAgICB0aGlzLmNvbnN1bWVycyA9IGluY29taW5nLmNvbnN1bWVycztcblxuICAgIH1cblxufVxuXG5leHBvcnQgY2xhc3MgQ29uc3VtZXJNb2RlbCB7XG5cbiAgICBwdWJsaWMgY2FyZDogU3RyaW5nO1xuICAgIHB1YmxpYyBpdGVtczogQXJyYXk8SXRlbU1vZGVsPjtcblxuICAgIGNvbnN0cnVjdG9yKGluY29taW5nOiBDb25zdW1lck1vZGVsKSB7XG4gICAgICAgIHRoaXMuY2FyZCA9IGluY29taW5nLmNhcmQ7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBpbmNvbWluZy5pdGVtcztcbiAgICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIEl0ZW1Nb2RlbCB7XG5cbiAgICBwdWJsaWMgYmFzZV9tZ210X2lkOiBOdW1iZXI7XG4gICAgcHVibGljIGl0ZW1fcHJpY2U6IE51bWJlcjtcbiAgICBwdWJsaWMgaW5ncmVkaWVudHM6IEFycmF5PEluZ3JlZGllbnRNb2RlbD47XG5cbiAgICBjb25zdHJ1Y3RvcihpbmNvbWluZzogSXRlbU1vZGVsKSB7XG4gICAgICAgIHRoaXMuYmFzZV9tZ210X2lkID0gaW5jb21pbmcuYmFzZV9tZ210X2lkO1xuICAgICAgICB0aGlzLml0ZW1fcHJpY2UgPSBpbmNvbWluZy5pdGVtX3ByaWNlO1xuICAgICAgICB0aGlzLmluZ3JlZGllbnRzID0gaW5jb21pbmcuaW5ncmVkaWVudHM7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBJbmdyZWRpZW50TW9kZWwge1xuXG4gICAgcHVibGljIGluZ3JlZGllbnRfbWdtdF9pZDogTnVtYmVyO1xuICAgIHB1YmxpYyBhY3Rpb246IE51bWJlcjtcbiAgICBwdWJsaWMgaW5ncmVkaWVudF9wcmljZTogTnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoaW5jb21pbmc6IEluZ3JlZGllbnRNb2RlbCkge1xuICAgICAgICB0aGlzLmluZ3JlZGllbnRfbWdtdF9pZCA9IGluY29taW5nLmluZ3JlZGllbnRfbWdtdF9pZDtcbiAgICAgICAgdGhpcy5hY3Rpb24gPSBpbmNvbWluZy5hY3Rpb247XG4gICAgICAgIHRoaXMuaW5ncmVkaWVudF9wcmljZSA9IGluY29taW5nLmluZ3JlZGllbnRfcHJpY2U7XG4gICAgfVxuXG59XG5cblxuLy9Db250cmFjdFxuLy8geyAgXG4vLyAgICAgXCJ0YWJsZVwiOjMsXG4vLyAgICAgXCJndWVzdHNcIjoyLFxuLy8gICAgIFwiYW1vdW50X3ByaWNlXCI6NjYuMzAsXG4vLyAgICAgXCJzdGF0dXNcIjoxLFxuLy8gICAgIFwicmVzdGF1cmFudF9pZF9jbG91ZFwiOjEsXG4vLyAgICAgXCJ3YWl0ZXJfaWRfY2xvdWRcIjoxLFxuLy8gICAgIFwiY3JlYXRlZF9hdFwiOlwiMTIvMDIvMjAxOCAxMjo1MFwiLFxuLy8gICAgIFwidXBkYXRlZF9hdFwiOlwiMTIvMDIvMjAxOCAxMjo1MVwiLFxuLy8gICAgIFwiY29uc3VtZXJzXCI6WyAgXG4vLyAgICAgICAgeyAgXG4vLyAgICAgICAgICAgXCJjbG91ZF9pZFwiOjUwOCxcbi8vICAgICAgICAgICBcIml0ZW1zXCI6WyAgXG4vLyAgICAgICAgICAgICAgeyAgXG4vLyAgICAgICAgICAgICAgICAgXCJjbG91ZF9pZFwiOjMzLFxuLy8gICAgICAgICAgICAgICAgIFwiaW5ncmVkaWVudHNcIjpudWxsXG4vLyAgICAgICAgICAgICAgfSxcbi8vICAgICAgICAgICAgICB7ICBcbi8vICAgICAgICAgICAgICAgICBcImNsb3VkX2lkXCI6MTAxLFxuLy8gICAgICAgICAgICAgICAgIFwiaW5ncmVkaWVudHNcIjpudWxsXG4vLyAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgIF1cbi8vICAgICAgICB9LFxuLy8gICAgICAgIHsgIFxuLy8gICAgICAgICAgIFwiY2xvdWRfaWRcIjo2MDMsXG4vLyAgICAgICAgICAgXCJpdGVtc1wiOlsgIFxuLy8gICAgICAgICAgICAgIHsgIFxuLy8gICAgICAgICAgICAgICAgIFwiY2xvdWRfaWRcIjoxMCxcbi8vICAgICAgICAgICAgICAgICBcImluZ3JlZGllbnRzXCI6WyAgXG4vLyAgICAgICAgICAgICAgICAgICAgMVxuLy8gICAgICAgICAgICAgICAgIF1cbi8vICAgICAgICAgICAgICB9LFxuLy8gICAgICAgICAgICAgIHsgIFxuLy8gICAgICAgICAgICAgICAgIFwiY2xvdWRfaWRcIjo3MSxcbi8vICAgICAgICAgICAgICAgICBcImluZ3JlZGllbnRzXCI6WyAgXG4vLyAgICAgICAgICAgICAgICAgICAgNSxcbi8vICAgICAgICAgICAgICAgICAgICAxNFxuLy8gICAgICAgICAgICAgICAgIF1cbi8vICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgXVxuLy8gICAgICAgIH1cbi8vICAgICBdXG4vLyAgfVxuXG5cblxuIl19
