
export interface SmtpConfigModel{
    id: string;
    host: string;
    portNumber: string;
    userEmail: string;
    userPassword: string;
    effectiveFrom: string;
    effectiveTo: string;
    ssl: string;
}
