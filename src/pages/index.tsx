export default function Home() {
  return <></>;
}

export const getServerSideProps = async () => {
  const response = await fetch(
    "https://infra-api.huddle01.workers.dev/v2/create-room",
    {
      method: "POST",
      body: JSON.stringify({
        title: "Huddle01 Room",
      }),
      headers: {
        "Content-type": "application/json",
        "x-api-key": "ak_WXNceyWFTmAzZYpB",
      },
    },
  );

  const data = await response.json();

  const roomId = data.data.roomId;

  return {
    redirect: {
      destination: `/${roomId}`,
      permanent: false,
    },
  };
};
