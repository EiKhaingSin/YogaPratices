import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

const Pricing = () => {
  const plans = [
    {
      id: 1,
      name: 'Drop-In',
      price: '$25',
      period: 'per class',
      description: 'Perfect for trying us out',
      features: [
        'Single class access',
        'All class types',
        'Valid for 30 days',
        'No commitment',
      ],
      popular: false,
    },
    {
      id: 2,
      name: 'Monthly Unlimited',
      price: '$129',
      period: 'per month',
      description: 'Most popular choice',
      features: [
        'Unlimited classes',
        'All class types',
        'Online & in-studio',
        'Free workshops',
        '10% retail discount',
        'Cancel anytime',
      ],
      popular: true,
    },
    {
      id: 3,
      name: '10-Class Pack',
      price: '$199',
      period: '10 classes',
      description: 'Great value for regular practice',
      features: [
        '10 class credits',
        'Valid for 6 months',
        'All class types',
        'Share with friends',
        'No expiration rush',
      ],
      popular: false,
    },
    {
      id: 4,
      name: 'Annual Membership',
      price: '$1,199',
      period: 'per year',
      description: 'Best value for committed yogis',
      features: [
        'Unlimited classes',
        'All class types',
        'Online & in-studio',
        'Free workshops',
        '20% retail discount',
        'Guest passes included',
        'Priority booking',
      ],
      popular: false,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-stone-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Pricing</span>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mt-4 mb-6">
            Choose Your Plan
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Flexible membership options to fit your lifestyle and budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={`relative h-full flex flex-col ${
                plan.popular
                  ? 'border-2 border-teal-500 shadow-2xl transform scale-105'
                  : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}
              
              <Card.Header className="text-center pb-4">
                <h3 className="text-2xl font-bold text-stone-900 mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-extrabold text-stone-900">{plan.price}</span>
                  <span className="text-stone-600 ml-2">{plan.period}</span>
                </div>
                <p className="text-stone-600 text-sm">{plan.description}</p>
              </Card.Header>

              <Card.Body className="flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-stone-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card.Body>

              <Card.Footer className="pt-6">
                <Button
                  variant={plan.popular ? 'primary' : 'outline'}
                  className="w-full"
                >
                  Get Started
                </Button>
              </Card.Footer>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center bg-white rounded-2xl shadow-lg p-8 border border-stone-100">
          <h3 className="text-2xl font-bold text-stone-900 mb-4">
            New Student Special
          </h3>
          <p className="text-lg text-stone-600 mb-6">
            First-time students get <span className="font-bold text-teal-600">50% off</span> their first month
          </p>
          <Button variant="primary" size="lg">
            Claim Your Discount
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

