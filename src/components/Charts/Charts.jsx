import PropTypes from 'prop-types';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const Charts = ({ totalMoney }) => {
    console.log(totalMoney)
    const data = [
        { name: 'Donation', value: totalMoney },
        { name: 'Total', value: 3480 },

    ];

    const COLORS = ['#00C49F', '#EF4444'];

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle);
        const y = cy + radius * Math.sin(-midAngle);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="middle">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <div>
            <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <div className='flex justify-center gap-5'>
                <div>
                    <figure>
                        <progress className="progress progress-accent w-56" value="100" max="100"></progress>
                    </figure>
                    <figcaption>Donation</figcaption>
                </div>
                <div>
                    <figure>
                    <progress className="progress progress-error w-56" value="100" max="100"></progress>
                    </figure>
                    <figcaption>Total</figcaption>
                </div>
            </div>
        </div>
    );
};
Charts.propTypes = {
    totalMoney: PropTypes.number.isRequired,
};
export default Charts;
