import './ExploreContainer.css';

interface ContainerProps {
    name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
    return (
        <div className='container'>
            <div className='container__title'>{name}</div>
            <p>
                See{' '}
                <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://bio-component-library.vercel.app/'
                >
                    More Projects
                </a>
            </p>
            <p>
                See{' '}
                <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://bio-storybook.vercel.app/?path=/docs/getting-started-introduction--docs'
                >
                    More Components
                </a>
            </p>
        </div>
    );
};

export default ExploreContainer;
