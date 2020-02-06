export interface ItemsSetting {
    name: string;
    amount: number;
    remark?: string;
    unit: string;
}

export interface CompanySetting {
    id: string;
    companyId: string;
    name: string;
    remark?: string;
}

export interface ItemsByCompanyReq {
    id: string;
    items?: ItemsSetting[];
}