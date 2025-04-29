interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader = ({ title, description }: PageHeaderProps) => {
  return (
    <div className="mb-8 text-center">
      <h1 className="mb-2 text-3xl font-bold text-primary md:text-4xl">{title}</h1>
      {description && <p className="text-lg text-muted-foreground">{description}</p>}
    </div>
  );
};

export default PageHeader;
