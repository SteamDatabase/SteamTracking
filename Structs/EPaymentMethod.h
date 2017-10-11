typedef enum EPaymentMethod
{
    k_EPaymentMethodNone = 0, // None
    k_EPaymentMethodCDKey, // CD Key
    k_EPaymentMethodCreditCard, // Credit Card
    k_EPaymentMethodGiropay, // Giropay
    k_EPaymentMethodPayPal, // PayPal
    k_EPaymentMethodIDEAL, // iDEAL
    k_EPaymentMethodPaySafeCard, // PaySafeCard
    k_EPaymentMethodSofort, // Sofort
    k_EPaymentMethodGuestPass, // Guest Pass
    k_EPaymentMethodWebMoney, // WebMoney
    k_EPaymentMethodMoneyBookers, // MoneyBookers
    k_EPaymentMethodAliPay, // AliPay
    k_EPaymentMethodYandex, // Yandex
    k_EPaymentMethodKiosk, // Kiosk
    k_EPaymentMethodQIWI, // QIWI
    k_EPaymentMethodGameStop, // GameStop
    k_EPaymentMethodHardwarePromo, // Hardware Promo
    k_EPaymentMethodMopay, // mopay
    k_EPaymentMethodBoletoBancario, // Boleto Bancario
    k_EPaymentMethodBoaCompraGold, // BoaCompra Gold
    k_EPaymentMethodBancoDoBrasilOnline, // Banco do Brasil Online
    k_EPaymentMethodItauOnline, // Itau Online
    k_EPaymentMethodBradescoOnline, // Bradesco Online
    k_EPaymentMethodPagseguro, // Pagseguro
    k_EPaymentMethodVisaBoaCompra, // Visa (BoaCompra)
    k_EPaymentMethodAmexBoaCompra, // Amex (BoaCompra)
    k_EPaymentMethodAura, // Aura
    k_EPaymentMethodHipercard, // Hipercard
    k_EPaymentMethodMastercardBoaCompra, // Mastercard (BoaCompra)
    k_EPaymentMethodDinersCardBoaCompra, // Diner's Card (BoaCompra)
    k_EPaymentMethodAuthorizedDevice, // Authorized Device
    k_EPaymentMethodMOLPoints, // MOL Points
    k_EPaymentMethodClickBuy, // Click&Buy
    k_EPaymentMethodBeeline, // Beeline
    k_EPaymentMethodKonbini, // Konbini
    k_EPaymentMethodEClubPoints, // EClub Points
    k_EPaymentMethodCreditCardJapan, // Credit Card (Japan)
    k_EPaymentMethodBankTransferJapan, // Bank Transfer (Japan)
    k_EPaymentMethodPayEasyJapan, // Pay Easy (Japan)
    k_EPaymentMethodZong, // Zong
    k_EPaymentMethodCultureVoucher, // Culture Voucher
    k_EPaymentMethodBookVoucher, // Book Voucher
    k_EPaymentMethodHappymoneyVoucher, // Happymoney Voucher
    k_EPaymentMethodConvenientStoreVoucher, // Convenient Store Voucher
    k_EPaymentMethodGameVoucher, // Game Voucher
    k_EPaymentMethodMultibanco, // Multibanco
    k_EPaymentMethodPayshop, // Payshop
    k_EPaymentMethodMaestro, // Maestro
    k_EPaymentMethodOXXO, // OXXO
    k_EPaymentMethodToditoCash, // Todito Cash
    k_EPaymentMethodCarnet, // Carnet
    k_EPaymentMethodSPEI, // SPEI
    k_EPaymentMethod3pay, // 3pay
    k_EPaymentMethodIsBank, // Is Bank
    k_EPaymentMethodGaranti, // Garanti
    k_EPaymentMethodAkbank, // Akbank
    k_EPaymentMethodYapiKredi, // Yapi Kredi
    k_EPaymentMethodHalkbank, // Halkbank
    k_EPaymentMethodBankAsya, // Bank Asya
    k_EPaymentMethodFinansbank, // Finansbank
    k_EPaymentMethodDenizBank, // DenizBank
    k_EPaymentMethodPTT, // PTT
    k_EPaymentMethodCashU, // CashU
    k_EPaymentMethodAutoGrant = 64, // Auto Grant
    k_EPaymentMethodWebMoneyJapan, // WebMoney (Japan)
    k_EPaymentMethodOneCard, // OneCard
    k_EPaymentMethodPSE, // PSE
    k_EPaymentMethodExito, // Exito
    k_EPaymentMethodEfecty, // Efecty
    k_EPaymentMethodBalota, // Balota
    k_EPaymentMethodPinValidda, // PinValidda
    k_EPaymentMethodMangirKart, // MangirKart
    k_EPaymentMethodBancoCreditoDePeru, // Banco Credito de Peru
    k_EPaymentMethodBBVAContinental, // BBVA Continental
    k_EPaymentMethodSafetyPay, // SafetyPay
    k_EPaymentMethodPagoEfectivo, // PagoEfectivo
    k_EPaymentMethodTrustly, // Trustly
    k_EPaymentMethodUnionPay, // UnionPay
    k_EPaymentMethodBitcoin, // Bitcoin
    k_EPaymentMethodLicensedSite, // Licensed Site
    k_EPaymentMethodBitCash, // BitCash
    k_EPaymentMethodNetCash, // NetCash
    k_EPaymentMethodNanaco, // Nanaco
    k_EPaymentMethodTenpay, // Tenpay
    k_EPaymentMethodWeChat, // WeChat
    k_EPaymentMethodCashOnDelivery, // Cash on Delivery
    k_EPaymentMethodCreditCardIndia, // Credit Card (India)
    k_EPaymentMethodDebitCardIndia, // Debit Card (India)
    k_EPaymentMethodNetBankingIndia, // Net Banking (India)
    k_EPaymentMethodCashCardIndia, // Cash Card (India)
    k_EPaymentMethodWalletIndia, // Wallet (India)
    k_EPaymentMethodMobileKorea, // Mobile (Korea)
    k_EPaymentMethodNaranja, // Naranja
    k_EPaymentMethodCencosud, // Cencosud
    k_EPaymentMethodCabal, // Cabal
    k_EPaymentMethodPagoFacil, // Pago Facil
    k_EPaymentMethodRapipago, // Rapipago
    k_EPaymentMethodBancoNacionalDeCostaRica, // Banco Nacional de Costa Rica
    k_EPaymentMethodBancoPoplar, // Banco Poplar
    k_EPaymentMethodRedPagos, // Red Pagos
    k_EPaymentMethodSPE, // SPE
    k_EPaymentMethodMulticaja, // Multicaja
    k_EPaymentMethodRedCompra, // RedCompra
    k_EPaymentMethodZiraatBank, // Ziraat Bank
    k_EPaymentMethodVakiflarBank, // Vakiflar Bank
    k_EPaymentMethodKuveytTurkBank, // Kuveyt Turk Bank
    k_EPaymentMethodEkonomiBank, // Ekonomi Bank
    k_EPaymentMethodPichincha, // Pichincha
    k_EPaymentMethodPichinchaCash, // Pichincha Cash
    k_EPaymentMethodPrzelewy24, // Przelewy24
    k_EPaymentMethodTrustpay, // Trustpay
    k_EPaymentMethodPOLi, // POLi
    k_EPaymentMethodMercadoPago, // MercadoPago
    k_EPaymentMethodPayU, // PayU
    k_EPaymentMethodVTCPayWallet, // VTC Pay Wallet
    k_EPaymentMethodMrCash, // MrCash
    k_EPaymentMethodEPS, // EPS
    k_EPaymentMethodInterac, // Interac
    k_EPaymentMethodVTCPayCards, // VTC Pay Cards
    k_EPaymentMethodVTCPayOnlineBanking, // VTC Pay Online Banking
    k_EPaymentMethodWallet = 128, // Wallet
    k_EPaymentMethodValve, // Valve
    k_EPaymentMethodSteamPressMaster, // Steam/Press Master
    k_EPaymentMethodStorePromotion, // Store Promotion
    k_EPaymentMethodOEMTicket = 256, // OEM Ticket
    k_EPaymentMethodSplit = 512, // Split
    k_EPaymentMethodComplimentary = 1024, // Complimentary
} EPaymentMethod;
