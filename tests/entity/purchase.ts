export interface Purchase {
    login_details: LoginDetails;
    products: string[];
    checkout_info: CheckoutInfo;
}

export interface CheckoutInfo {
    first_name: string;
    last_name: string;
    zip_code: string;
}

export interface LoginDetails {
    user_name: string;
    password: string;
}
