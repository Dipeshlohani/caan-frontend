import CallToAction from "@/components/cta";
import Layout from "@/components/layout";
import ActivityDetail from "@/components/activities/detail";

export default async function AboutActivity({ params }: { params: { activityId: string } }) {
  return (
    <div>
      <Layout>
        {params.activityId !== 'null' ? <ActivityDetail activityId={params.activityId} /> : ""}
        <CallToAction />
      </Layout>
    </div>
  );
}
