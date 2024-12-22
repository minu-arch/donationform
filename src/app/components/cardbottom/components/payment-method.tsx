import { Visa, Mastercard, ApplePay, GooglePay, PayPal } from '../../svg/svg-icons'
import Image from 'next/image'
import { DonationPaymentMethods } from '../../ui/Card'

const PaymentMethod = () => {
    return (
        <DonationPaymentMethods>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="order-2 sm:order-last">
                    <Image
                        src="/fr.png"
                        alt="fr"
                        width={64}
                        height={64}
                    />
                </div>
                <div className="flex items-center gap-4 order-1 sm:order-first">
                    <Visa size={32} />
                    <Mastercard size={32} />
                    <ApplePay size={32} />
                    <GooglePay size={32} />
                    <PayPal size={32} />
                </div>
            </div>
        </DonationPaymentMethods>
    )
}

export default PaymentMethod