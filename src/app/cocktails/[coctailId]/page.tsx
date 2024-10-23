interface PageProps {
  params: {
    coctailId: string;
  };
}

const Page: React.FC<PageProps> = ({ params }) => {
  return (
    <div>
      hello {params.coctailId}
    </div>
  );
}

export default Page;