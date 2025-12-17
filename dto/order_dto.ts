export class orderDto {
  status: string
  courierId: number
  customerName: string
  customerPhone: number
  comment: string
  id: number


  constructor(status: string, courierId: number, customerName: string, customerPhone: number, comment: string, id: number) {
    this.status = status
    this.courierId = courierId
    this.customerName = customerName
    this.customerPhone = customerPhone
    this.comment = comment
    this.id = id
  }
}