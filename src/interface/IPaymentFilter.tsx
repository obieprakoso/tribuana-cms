interface IPaymentFilter {
    start_date: string;
    end_date: string;
    user_id?: number;
    payment_menu_id?: number;
}

export default IPaymentFilter;