import  User  from '../models/User.model'

export class UserService {
	constructor() {
	}

	/**
	 * service: 유저 생성
	 */
	async createUser(userData: any): Promise<any> {
		let resultUser = await User.create(userData);

		return resultUser.toJSON();
	}

}

export const userService: any = new UserService();
