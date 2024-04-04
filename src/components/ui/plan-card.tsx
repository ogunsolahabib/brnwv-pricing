import Button from "./button";

const features = [
    'Commercial Liscence',
    '100+ HTML UI Elmemnts',
    '01 Domain Sup',
    'Unlimited Domain Sup',
    '6 Month Premium Membership',
    'Lifetime Update'
]

export default function PlanCard({ plan }: { plan: any }) {
    const { name, price, included, excluded } = plan;
    return <div className="bg-white p-6">
        <h2 className="text-sm uppercase font-bold text-gray-800">{name}</h2>
        <div><small className="text-lg text-gray-600 font-bold">$</small><span className="text-3xl font-bold">{price}</span><span>/month</span></div>
        <div className="mt-4">
            <ul className="flex flex-col gap-3">{included.map((feature: any) => <li key={feature}>
                <span className="text-blue-500">&#x2713;</span>
                {features[feature]}</li>)}

                {excluded.map((feature: any) => <li key={feature}>
                    <span className="text-gray-400">&#x2717;</span>{ }
                    {features[feature]}</li>)}
            </ul>
        </div>

        <Button className="mt-6" variant={name === 'standard' ? 'primary' : 'secondary'}>Select Plan</Button>
    </div>
}