import { Card, CardBody, Typography, Avatar } from "@material-tailwind/react";

const CPlus2 = ({ rest }) => {
  if (!rest || rest.length === 0) return null;
  return (
    <Card className="w-full dark:bg-[#392C4F] dark:opacity-90">
      <CardBody>
        <div className=" flex items-center justify-between"></div>
        <div className="divide-y divide-gray-200">
          {rest.map(
            (
              { name, avatar, id, username, points, bugs, dayStreak },
              index
            ) => (
              <div
                key={id}
                className="flex items-center justify-between pb-2 pt-2 last:pb-0"
              >
                <div className="flex items-center gap-x-3">
                  <h1 className="dark:text-white"># {index + 4}</h1>
                  <Avatar size="sm" src={avatar} alt={name} />
                  <div>
                    <Typography
                      color="black"
                      variant="p"
                      className="dark:text-white"
                    >
                      {name}
                    </Typography>
                    <Typography
                      variant="p"
                      color="gray"
                      className="dark:text-gray-400"
                    >
                      {username}
                    </Typography>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex flex-col">
                    <Typography className="text-orangeColor" variant="p">
                      {points} Pts
                    </Typography>
                    <Typography
                      className="text-gray-700 dark:text-gray-400"
                      variant="p"
                    >
                      {bugs} bugs solved
                    </Typography>
                  </div>
                  <div>
                    <span
                      className="
    flex items-center gap-1
    w-fit p-1 px-2 
    bg-[#fffae7] rounded-2xl text-center 
    text-sm sm:text-base
    whitespace-nowrap
  "
                    >
                      🔥 {dayStreak} days
                    </span>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </CardBody>
    </Card>
  );
};

export default CPlus2;
