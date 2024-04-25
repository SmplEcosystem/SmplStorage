import {WithdrawalRequestDto} from "./withdrawal-request-dto";

export interface VenmoWithdrawalDto extends WithdrawalRequestDto{
  name: string;
  username: string;
}
