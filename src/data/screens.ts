export type ScreenMeta = {
  id: string
  name: string
  route: string
  imageFile: string
}

export const SCREENS: ScreenMeta[] = [
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

