import { GenderEnum } from '@/enums/gender'
import man from '@/assets/images/man.webp'
import female from '@/assets/images/female.webp'
import un_kown from '@/assets/images/unkown.webp'

const DEFAULT_AVATAR_MAP = {
  [GenderEnum.MALE]: man,
  [GenderEnum.FEMALE]: female,
  [GenderEnum.UN_KNOWN]: un_kown
}

export const getDefaultAvatar = (gender: GenderEnum | undefined = GenderEnum.UN_KNOWN) => {
  return DEFAULT_AVATAR_MAP[gender]
}
