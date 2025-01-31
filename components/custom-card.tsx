import React from 'react';
import Link from 'next/link';

export interface CardProps {
  icon: React.ReactNode;
  title: {
    text: string,
    link: string
  };
  description: string;
  links: {
    text: string;
    href: string;
  }[];
}

export const CustomCard: React.FC<CardProps> = (props: CardProps) => {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <div className="card-icon">{props.icon}</div>
          {
            props.title.link ? (
              <h2 className="card-title"><Link href={`${props.title.link}`}>{props.title.text}</Link></h2>
            ) : (
              <h2 className="card-title">{props.title.text}</h2>
            )
          }
        </div>
        <div className="card-description">{props.description}</div>
        <ul className="card-links">
          {props.links.map((link, index) => (
            <li key={index}>
              <Link href={link.href}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        .card {
          border: 0.5px solid #24db96;
          border-radius: 5px;
          padding: 20px;
          margin-top: 20px;
          min-width: 325px;
          min-height: 225px;
          flex-basis: 45%;
        }
        .card-header {
          display: flex;
          align-items: center;
          margin-top: 0px;
          margin-bottom: 15px;
        }
        .card-icon {
          margin: 0px;
          padding: 0px;
          margin-bottom: 2px;
        }
        .card-title {
          font-size: 18px;
          font-weight: 600;
          margin-left: 10px;
          color: #3d4fff;
        }
        .card-links {
          list-style: disc;
          margin-left: 3rem;
        }
        .card-links li {
          font-size: 15px;
          margin-bottom: 5px;
          line-height: 1.6
        }
      `}</style>
    </>
  );
};