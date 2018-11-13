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
        this.guests = incoming.guests;
        this.amount_price = incoming.amount_price;
        this.status = incoming.status;
        this.restaurant_id_cloud = incoming.restaurant_id_cloud;
        this.waiter_id_cloud = incoming.waiter_id_cloud;
        this.consumers = incoming.consumers;
    }
}
exports.default = OrderDTO;
class ConsumerDTO {
    // waiter: fields.WaiterDTO()
    constructor(incoming) {
        this.cloud_id = incoming.cloud_id;
        this.items = incoming.items;
    }
}
exports.ConsumerDTO = ConsumerDTO;
class ItemDTO {
    // waiter: fields.WaiterDTO()
    constructor(incoming) {
        this.cloud_id = incoming.cloud_id;
        this.ingredients = incoming.ingredients;
    }
}
exports.ItemDTO = ItemDTO;
class IngredientDTO {
    // waiter: fields.WaiterDTO()
    constructor(incoming) {
        this.cloud_id = incoming.cloud_id;
    }
}
exports.IngredientDTO = IngredientDTO;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcGktY29yZS9jb21tb25zL2R0by9vcmRlci5kdG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDhDQUE4Qzs7QUFFOUMsdUJBQXVCO0FBQ3ZCLDBCQUEwQjtBQUMxQix1QkFBdUI7QUFDdkIsd0JBQXdCO0FBQ3hCLDhCQUE4QjtBQUM5Qix3QkFBd0I7QUFDeEIscUNBQXFDO0FBQ3JDLG9DQUFvQztBQUNwQyxLQUFLO0FBRUwsMkJBQTJCO0FBQzNCLGlDQUFpQztBQUNqQyxnQ0FBZ0M7QUFDaEMsNEJBQTRCO0FBQzVCLEtBQUs7QUFFTCxrREFBa0Q7QUFDbEQsa0RBQWtEO0FBQ2xELCtCQUErQjtBQUMvQixzQ0FBc0M7QUFDdEMsUUFBUTtBQUNSLElBQUk7QUFFSixvQ0FBb0M7QUFDcEMsK0JBQStCO0FBQy9CLHFDQUFxQztBQUNyQyxRQUFRO0FBQ1IsSUFBSTtBQUVKLE1BQXFCLFFBQVE7SUFTekIsNkJBQTZCO0lBRTdCLFlBQVksUUFBa0I7UUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUM5QixJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUM7UUFDMUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQzlCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxRQUFRLENBQUMsbUJBQW1CLENBQUM7UUFDeEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDO1FBQ2hELElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQztJQUV4QyxDQUFDO0NBRUo7QUF0QkQsMkJBc0JDO0FBRUQsTUFBYSxXQUFXO0lBSXBCLDZCQUE2QjtJQUU3QixZQUFZLFFBQXFCO1FBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUNsQyxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7SUFDaEMsQ0FBQztDQUVKO0FBWEQsa0NBV0M7QUFFRCxNQUFhLE9BQU87SUFJaEIsNkJBQTZCO0lBRTdCLFlBQVksUUFBaUI7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQztJQUM1QyxDQUFDO0NBRUo7QUFYRCwwQkFXQztBQUVELE1BQWEsYUFBYTtJQUd0Qiw2QkFBNkI7SUFFN0IsWUFBWSxRQUF1QjtRQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUM7SUFDdEMsQ0FBQztDQUVKO0FBVEQsc0NBU0M7QUFFRCxVQUFVO0FBQ1YsTUFBTTtBQUNOLGlCQUFpQjtBQUNqQixrQkFBa0I7QUFDbEIsNEJBQTRCO0FBQzVCLGtCQUFrQjtBQUNsQiwrQkFBK0I7QUFDL0IsMkJBQTJCO0FBQzNCLHVDQUF1QztBQUN2Qyx1Q0FBdUM7QUFDdkMsc0JBQXNCO0FBQ3RCLGFBQWE7QUFDYiw0QkFBNEI7QUFDNUIsd0JBQXdCO0FBQ3hCLG1CQUFtQjtBQUNuQixpQ0FBaUM7QUFDakMscUNBQXFDO0FBQ3JDLGtCQUFrQjtBQUNsQixtQkFBbUI7QUFDbkIsa0NBQWtDO0FBQ2xDLHFDQUFxQztBQUNyQyxpQkFBaUI7QUFDakIsY0FBYztBQUNkLFlBQVk7QUFDWixhQUFhO0FBQ2IsNEJBQTRCO0FBQzVCLHdCQUF3QjtBQUN4QixtQkFBbUI7QUFDbkIsaUNBQWlDO0FBQ2pDLG9DQUFvQztBQUNwQyx1QkFBdUI7QUFDdkIsb0JBQW9CO0FBQ3BCLGtCQUFrQjtBQUNsQixtQkFBbUI7QUFDbkIsaUNBQWlDO0FBQ2pDLG9DQUFvQztBQUNwQyx3QkFBd0I7QUFDeEIsd0JBQXdCO0FBQ3hCLG9CQUFvQjtBQUNwQixpQkFBaUI7QUFDakIsY0FBYztBQUNkLFdBQVc7QUFDWCxRQUFRO0FBQ1IsS0FBSyIsImZpbGUiOiJhcGktY29yZS9jb21tb25zL2R0by9vcmRlci5kdG8uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCB7IEJhc2VEVE8sIGZpZWxkcyB9ID0gcmVxdWlyZSgnZHRveCcpXG5cbi8vIERlZmluZSBvcmRlciBtYXBwaW5nXG4vLyBjb25zdCBPUkRFUl9NQVBQSU5HID0ge1xuLy8gICAgIHRhYmxlOiBOdW1iZXIoKSxcbi8vICAgICBndWVzdHM6IE51bWJlcigpLFxuLy8gICAgIGFtb3VudF9wcmljZTogTnVtYmVyKCksXG4vLyAgICAgc3RhdHVzOiBOdW1iZXIoKSxcbi8vICAgICByZXN0YXVyYW50X2lkX2Nsb3VkOiBOdW1iZXIoKSxcbi8vICAgICAvLyB3YWl0ZXI6IGZpZWxkcy5XYWl0ZXJEVE8oKVxuLy8gfTtcblxuLy8gY29uc3QgV0FJVEVSX01BUFBJTkcgPSB7XG4vLyAgICAgY2xvdWRfaWQ6IGZpZWxkcy5udW1iZXIoKSxcbi8vICAgICBtZ210X2lkOiBmaWVsZHMuc3RyaW5nKCksXG4vLyAgICAgbmFtZTogZmllbGRzLnN0cmluZygpXG4vLyB9O1xuXG4vLyAvLyBEZWZpbmUgYSBEVE8gd2hpY2ggcmVwcmVzZW50cyBhIHNpbmdsZSBvcmRlclxuLy8gZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXJEVE8gZXh0ZW5kcyBCYXNlRFRPIHtcbi8vICAgICBjb25zdHJ1Y3RvcihkYXRhOiBhbnkpIHtcbi8vICAgICAgICAgc3VwZXIoZGF0YSwgT1JERVJfTUFQUElORyk7XG4vLyAgICAgfVxuLy8gfVxuXG4vLyBjbGFzcyBXYWl0ZXJEVE8gZXh0ZW5kcyBCYXNlRFRPIHtcbi8vICAgICBjb25zdHJ1Y3RvcihkYXRhOiBhbnkpIHtcbi8vICAgICAgIHN1cGVyKGRhdGEsIFdBSVRFUl9NQVBQSU5HKTtcbi8vICAgICB9XG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVyRFRPIHtcblxuICAgIHB1YmxpYyB0YWJsZTogTnVtYmVyO1xuICAgIHB1YmxpYyBndWVzdHM6IE51bWJlcjtcbiAgICBwdWJsaWMgYW1vdW50X3ByaWNlOiBOdW1iZXI7XG4gICAgcHVibGljIHN0YXR1czogTnVtYmVyO1xuICAgIHB1YmxpYyByZXN0YXVyYW50X2lkX2Nsb3VkOiBOdW1iZXI7XG4gICAgcHVibGljIHdhaXRlcl9pZF9jbG91ZDogTnVtYmVyO1xuICAgIHB1YmxpYyBjb25zdW1lcnM6IENvbnN1bWVyRFRPO1xuICAgIC8vIHdhaXRlcjogZmllbGRzLldhaXRlckRUTygpXG5cbiAgICBjb25zdHJ1Y3RvcihpbmNvbWluZzogT3JkZXJEVE8pIHtcbiAgICAgICAgdGhpcy50YWJsZSA9IGluY29taW5nLnRhYmxlO1xuICAgICAgICB0aGlzLmd1ZXN0cyA9IGluY29taW5nLmd1ZXN0cztcbiAgICAgICAgdGhpcy5hbW91bnRfcHJpY2UgPSBpbmNvbWluZy5hbW91bnRfcHJpY2U7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gaW5jb21pbmcuc3RhdHVzO1xuICAgICAgICB0aGlzLnJlc3RhdXJhbnRfaWRfY2xvdWQgPSBpbmNvbWluZy5yZXN0YXVyYW50X2lkX2Nsb3VkO1xuICAgICAgICB0aGlzLndhaXRlcl9pZF9jbG91ZCA9IGluY29taW5nLndhaXRlcl9pZF9jbG91ZDtcbiAgICAgICAgdGhpcy5jb25zdW1lcnMgPSBpbmNvbWluZy5jb25zdW1lcnM7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIENvbnN1bWVyRFRPIHtcblxuICAgIHB1YmxpYyBjbG91ZF9pZDogTnVtYmVyO1xuICAgIHB1YmxpYyBpdGVtczogQXJyYXk8SXRlbURUTz47XG4gICAgLy8gd2FpdGVyOiBmaWVsZHMuV2FpdGVyRFRPKClcblxuICAgIGNvbnN0cnVjdG9yKGluY29taW5nOiBDb25zdW1lckRUTykge1xuICAgICAgICB0aGlzLmNsb3VkX2lkID0gaW5jb21pbmcuY2xvdWRfaWQ7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBpbmNvbWluZy5pdGVtcztcbiAgICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIEl0ZW1EVE8ge1xuXG4gICAgcHVibGljIGNsb3VkX2lkOiBOdW1iZXI7XG4gICAgcHVibGljIGluZ3JlZGllbnRzOiBBcnJheTxJbmdyZWRpZW50RFRPPjtcbiAgICAvLyB3YWl0ZXI6IGZpZWxkcy5XYWl0ZXJEVE8oKVxuXG4gICAgY29uc3RydWN0b3IoaW5jb21pbmc6IEl0ZW1EVE8pIHtcbiAgICAgICAgdGhpcy5jbG91ZF9pZCA9IGluY29taW5nLmNsb3VkX2lkO1xuICAgICAgICB0aGlzLmluZ3JlZGllbnRzID0gaW5jb21pbmcuaW5ncmVkaWVudHM7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBJbmdyZWRpZW50RFRPIHtcblxuICAgIHB1YmxpYyBjbG91ZF9pZDogQXJyYXk8TnVtYmVyPjtcbiAgICAvLyB3YWl0ZXI6IGZpZWxkcy5XYWl0ZXJEVE8oKVxuXG4gICAgY29uc3RydWN0b3IoaW5jb21pbmc6IEluZ3JlZGllbnREVE8pIHtcbiAgICAgICAgdGhpcy5jbG91ZF9pZCA9IGluY29taW5nLmNsb3VkX2lkO1xuICAgIH1cblxufVxuXG4vL0NvbnRyYWN0XG4vLyB7ICBcbi8vICAgICBcInRhYmxlXCI6Myxcbi8vICAgICBcImd1ZXN0c1wiOjIsXG4vLyAgICAgXCJhbW91bnRfcHJpY2VcIjo2Ni4zMCxcbi8vICAgICBcInN0YXR1c1wiOjEsXG4vLyAgICAgXCJyZXN0YXVyYW50X2lkX2Nsb3VkXCI6MSxcbi8vICAgICBcIndhaXRlcl9pZF9jbG91ZFwiOjEsXG4vLyAgICAgXCJjcmVhdGVkX2F0XCI6XCIxMi8wMi8yMDE4IDEyOjUwXCIsXG4vLyAgICAgXCJ1cGRhdGVkX2F0XCI6XCIxMi8wMi8yMDE4IDEyOjUxXCIsXG4vLyAgICAgXCJjb25zdW1lcnNcIjpbICBcbi8vICAgICAgICB7ICBcbi8vICAgICAgICAgICBcImNsb3VkX2lkXCI6NTA4LFxuLy8gICAgICAgICAgIFwiaXRlbXNcIjpbICBcbi8vICAgICAgICAgICAgICB7ICBcbi8vICAgICAgICAgICAgICAgICBcImNsb3VkX2lkXCI6MzMsXG4vLyAgICAgICAgICAgICAgICAgXCJpbmdyZWRpZW50c1wiOm51bGxcbi8vICAgICAgICAgICAgICB9LFxuLy8gICAgICAgICAgICAgIHsgIFxuLy8gICAgICAgICAgICAgICAgIFwiY2xvdWRfaWRcIjoxMDEsXG4vLyAgICAgICAgICAgICAgICAgXCJpbmdyZWRpZW50c1wiOm51bGxcbi8vICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgXVxuLy8gICAgICAgIH0sXG4vLyAgICAgICAgeyAgXG4vLyAgICAgICAgICAgXCJjbG91ZF9pZFwiOjYwMyxcbi8vICAgICAgICAgICBcIml0ZW1zXCI6WyAgXG4vLyAgICAgICAgICAgICAgeyAgXG4vLyAgICAgICAgICAgICAgICAgXCJjbG91ZF9pZFwiOjEwLFxuLy8gICAgICAgICAgICAgICAgIFwiaW5ncmVkaWVudHNcIjpbICBcbi8vICAgICAgICAgICAgICAgICAgICAxXG4vLyAgICAgICAgICAgICAgICAgXVxuLy8gICAgICAgICAgICAgIH0sXG4vLyAgICAgICAgICAgICAgeyAgXG4vLyAgICAgICAgICAgICAgICAgXCJjbG91ZF9pZFwiOjcxLFxuLy8gICAgICAgICAgICAgICAgIFwiaW5ncmVkaWVudHNcIjpbICBcbi8vICAgICAgICAgICAgICAgICAgICA1LFxuLy8gICAgICAgICAgICAgICAgICAgIDE0XG4vLyAgICAgICAgICAgICAgICAgXVxuLy8gICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICBdXG4vLyAgICAgICAgfVxuLy8gICAgIF1cbi8vICB9XG5cblxuXG4iXX0=
