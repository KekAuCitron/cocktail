export class Bar {
    id: number;
    establishmentName?: string;
    profilePicture?: string; 
    images?: string[];
    theme?: string; 
    email?: string;
    phone?: string;
    web?: string; 
    address?: string;
    lat?: number;
    lng?: number;
    description?: string
}

function getId() {
    return this.id;
}