export type ScreenMeta = {
  id: string
  name: string
  route: string
  imageFile: string
}

export const SCREENS: ScreenMeta[] = [
  { id: '1621:130335', name: 'Onboarding/Loading', route: 'onboarding/loading', imageFile: '1621-130335.png' },
  { id: '7625:57953', name: 'Onboarding/PhoneNumber', route: 'onboarding/phone-number', imageFile: '7625-57953.png' },
  { id: '2209:175996', name: 'Onboarding/OTP 1', route: 'onboarding/otp-1', imageFile: '2209-175996.png' },
  { id: '2209:176089', name: 'Onboarding/OTP 2', route: 'onboarding/otp-2', imageFile: '2209-176089.png' },
  { id: '1888:130960', name: 'Onboarding/SpacesQ1', route: 'onboarding/spaces-q1', imageFile: '1888-130960.png' },
  { id: '1621:130446', name: 'Onboarding/SpacesQ2', route: 'onboarding/spaces-q2', imageFile: '1621-130446.png' },
  { id: '1722:47848', name: 'Onboarding/SpacesQ2-LoadMore', route: 'onboarding/spaces-q2-loadmore', imageFile: '1722-47848.png' },
  { id: '1621:130413', name: 'Onboarding/SpacesQ3', route: 'onboarding/spaces-q3', imageFile: '1621-130413.png' },
  { id: '1722:49141', name: 'Onboarding/EditStyle', route: 'onboarding/edit-style', imageFile: '1722-49141.png' },
  { id: '1621:130310', name: 'Onboarding/Results 1', route: 'onboarding/results-1', imageFile: '1621-130310.png' },
  { id: '1826:113225', name: 'Onboarding/Results 2', route: 'onboarding/results-2', imageFile: '1826-113225.png' },

  { id: '2176:167104', name: 'mWEB/PDP', route: 'pdp', imageFile: '2176-167104.png' },
  { id: '2176:167828', name: 'mWEB/Reviews', route: 'reviews', imageFile: '2176-167828.png' },
  { id: '2176:167889', name: 'mWEB/InfluencerStore', route: 'influencer-store', imageFile: '2176-167889.png' },
  { id: '2176:167875', name: 'mWEB/PLP - Category', route: 'plp-category', imageFile: '2176-167875.png' },
  { id: '2176:168660', name: 'mWEB/Collection/Brand', route: 'collection-brand', imageFile: '2176-168660.png' },

  { id: '2812:235867', name: 'Prompt to sign in/PDP 1', route: 'pdp-signin-1', imageFile: '2812-235867.png' },
  { id: '2812:236615', name: 'Prompt to sign in/PDP 2', route: 'pdp-signin-2', imageFile: '2812-236615.png' },
  { id: '2812:238075', name: 'Prompt to sign in/PDP 3', route: 'pdp-signin-3', imageFile: '2812-238075.png' },

  { id: '2812:217496', name: 'Cart/Enter pincode 1', route: 'cart/pincode-1', imageFile: '2812-217496.png' },
  { id: '2812:217523', name: 'Cart/Enter pincode 2', route: 'cart/pincode-2', imageFile: '2812-217523.png' },
  { id: '2812:217505', name: 'Cart/Enter pincode 3', route: 'cart/pincode-3', imageFile: '2812-217505.png' },
  { id: '2812:217594', name: 'Cart/Enter pincode 4', route: 'cart/pincode-4', imageFile: '2812-217594.png' },

  { id: '2812:217665', name: 'Cart/Manage products 1', route: 'cart/manage-1', imageFile: '2812-217665.png' },
  { id: '2812:217669', name: 'Cart/Manage products 2', route: 'cart/manage-2', imageFile: '2812-217669.png' },
  { id: '2812:217675', name: 'Cart/Manage products 3', route: 'cart/manage-3', imageFile: '2812-217675.png' },
  { id: '2812:217688', name: 'Cart/Manage products 4', route: 'cart/manage-4', imageFile: '2812-217688.png' },
  { id: '2812:217701', name: 'Cart/Manage products 5', route: 'cart/manage-5', imageFile: '2812-217701.png' },
  { id: '2812:217727', name: 'Cart/Manage products 6', route: 'cart/manage-6', imageFile: '2812-217727.png' },
  { id: '2812:217747', name: 'Cart/Manage products 7', route: 'cart/manage-7', imageFile: '2812-217747.png' },

  { id: '2812:217752', name: 'Cart/Recommended 1', route: 'cart/recommended-1', imageFile: '2812-217752.png' },
  { id: '2812:217757', name: 'Cart/Recommended 2', route: 'cart/recommended-2', imageFile: '2812-217757.png' },

  { id: '2812:217772', name: 'Cart/Price details 1', route: 'cart/price-details-1', imageFile: '2812-217772.png' },
  { id: '2812:217776', name: 'Cart/Price details 2', route: 'cart/price-details-2', imageFile: '2812-217776.png' },

  { id: '2772:265055', name: 'Order confirmation 1', route: 'order-confirmation-1', imageFile: '2772-265055.png' },
  { id: '6113:66997', name: 'Order confirmation 2', route: 'order-confirmation-2', imageFile: '6113-66997.png' }
]

export function getScreenSrc(imageFile: string) {
  return `./assets/screens/${imageFile}`
}
