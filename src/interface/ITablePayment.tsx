interface ITablePayment {
    key: React.Key;
    id: string;
    payment_name: string;
    payment_date: string;
    payment_amount: string;
    payment_method: string;
    // image: string;
    user_name: string;
    is_loading: boolean;
}
export default ITablePayment;