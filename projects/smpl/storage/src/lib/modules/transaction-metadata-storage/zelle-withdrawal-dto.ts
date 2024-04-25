import {WithdrawalRequestDto} from "./withdrawal-request-dto";

export interface ZelleWithdrawalDto extends WithdrawalRequestDto{
  emailOrPhoneNumber: string;
  firstAndLastName: string;
}
