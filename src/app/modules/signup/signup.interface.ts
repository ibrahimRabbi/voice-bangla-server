 

export type TsignUp = {
    name: string,
    age: string,
    email: string,
    phone: string,
    division?: "Dhaka"|"Chattogram"|"Rajshahi"|"Khulna"|"Barishal"|"Sylhet"|"Rangpur"|"Mymensingh"
    gender : 'male' | 'female' | 'others'
    role?: 'user' | 'admin',
    password: string,
    profile?: string,
    district: string,
    bio?: string,
    profession?: string,
    sector?: string,
    isDeleted: boolean
}