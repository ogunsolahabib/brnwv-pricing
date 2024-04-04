import FeatureCard from "../ui/feature-card"

const featuresList = [
    {
        name: 'Feature 1',
        description: 'Description of Feature 1',
        icon: 'https://example.com/icon1.svg'
    },
    {
        name: 'Feature 2',
        description: 'Description of Feature 2',
        icon: 'https://example.com/icon2.svg'
    },
    {
        name: 'Feature 3',
        description: 'Description of Feature 3',
        icon: 'https://example.com/icon3.svg'
    },
    {
        name: 'Feature 4',
        description: 'Description of Feature 4',
        icon: 'https://example.com/icon4.svg'
    }
]

export default function Features() {
    return <section className="py-10">
        <h3 className="text-xl md:text-2xl font-bold text-center">Check our features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{
            featuresList.map((feature) => <FeatureCard key={feature.name} feature={feature} />)
        }
        </div>
    </section>
}