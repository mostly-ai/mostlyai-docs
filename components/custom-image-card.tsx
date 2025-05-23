import Image from 'next/image'

const CustomImageCard: React.FC = () => {
    return (
        <div className="image-card-container hide-on-mobile">
          <Image 
            className="image-card-element"
            src="/docs/docimages/_diagrams/settings-dashboard.svg" 
            alt="Settings dashboard"
            fill={true}
          />
        <style jsx>{`
          .image-card-container {
            border: 0px solid #ccc;
            border-radius: 5px;
            padding: 0px;
            margin-top: 0px;
            min-width: 325px;
            min-height: 225px;
            flex-basis: 45%;
            position: relative;
            marginTop: '0.5em'
          }
          .image-card-element {
            width: 100%;
            height: auto;
            object-fit: contain;
          }
          /* Media query for mobile devices */
          @media (max-width: 710px) {
            .hide-on-mobile {
              display: none; /* Hide the element on mobile devices */
            }
          }
        `}</style>
      </div>
    );
  };

export default CustomImageCard;