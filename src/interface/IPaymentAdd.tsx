interface IPaymentAdd {
    payment_date: string,
    payment_amount: string,
    user_id: number,
    payment_menu_id: number,
    payment_method: number,
    image: string
}

export default IPaymentAdd;