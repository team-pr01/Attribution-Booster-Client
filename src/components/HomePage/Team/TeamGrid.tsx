/* eslint-disable @typescript-eslint/no-explicit-any */
import TeamMemberCard from "./TeamMemberCard";

const TeamGrid = ({ teamMembers } : any) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {teamMembers?.map((member:any, index:number) => (
        <TeamMemberCard key={index} {...member} />
      ))}
    </div>
  );
};

export default TeamGrid;
