import {
  Activity,
  ArrowDownRight,
  ArrowUpRight,
  DollarSign,
  TrendingUp,
  Users,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const stats = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1%",
    changeType: "positive" as const,
    icon: DollarSign,
  },
  {
    title: "Active Users",
    value: "2,350",
    change: "+180.1%",
    changeType: "positive" as const,
    icon: Users,
  },
  {
    title: "Conversion Rate",
    value: "12.5%",
    change: "-2.4%",
    changeType: "negative" as const,
    icon: Activity,
  },
  {
    title: "Growth Rate",
    value: "+573",
    change: "+23.1%",
    changeType: "positive" as const,
    icon: TrendingUp,
  },
];

const recentActivity = [
  {
    user: "John Doe",
    action: "Created a new project",
    time: "2 minutes ago",
  },
  {
    user: "Sarah Johnson",
    action: "Upgraded to Pro plan",
    time: "10 minutes ago",
  },
  {
    user: "Mike Chen",
    action: "Completed onboarding",
    time: "1 hour ago",
  },
  {
    user: "Emily Davis",
    action: "Invited team member",
    time: "2 hours ago",
  },
  {
    user: "Alex Rodriguez",
    action: "Published first article",
    time: "3 hours ago",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here&#39;s what&#39;s happening with your business
          today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-muted-foreground flex items-center space-x-1 text-xs">
                {stat.changeType === "positive" ? (
                  <ArrowUpRight className="h-3 w-3 text-green-500" />
                ) : (
                  <ArrowDownRight className="h-3 w-3 text-red-500" />
                )}
                <span
                  className={
                    stat.changeType === "positive"
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
                  {stat.change}
                </span>
                <span>from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest actions from your users</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="bg-primary h-2 w-2 rounded-full"></div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm leading-none font-medium">
                      {activity.user}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {activity.action}
                    </p>
                  </div>
                  <div className="text-muted-foreground text-xs">
                    {activity.time}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common tasks you might want to perform
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              <button className="hover:bg-accent flex items-center justify-between rounded-lg border p-3 transition-colors">
                <div className="flex items-center space-x-3">
                  <Users className="text-primary h-5 w-5" />
                  <span className="text-sm font-medium">
                    Invite Team Member
                  </span>
                </div>
                <ArrowUpRight className="text-muted-foreground h-4 w-4" />
              </button>

              <button className="hover:bg-accent flex items-center justify-between rounded-lg border p-3 transition-colors">
                <div className="flex items-center space-x-3">
                  <DollarSign className="text-primary h-5 w-5" />
                  <span className="text-sm font-medium">View Billing</span>
                </div>
                <ArrowUpRight className="text-muted-foreground h-4 w-4" />
              </button>

              <button className="hover:bg-accent flex items-center justify-between rounded-lg border p-3 transition-colors">
                <div className="flex items-center space-x-3">
                  <Activity className="text-primary h-5 w-5" />
                  <span className="text-sm font-medium">View Analytics</span>
                </div>
                <ArrowUpRight className="text-muted-foreground h-4 w-4" />
              </button>

              <button className="hover:bg-accent flex items-center justify-between rounded-lg border p-3 transition-colors">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="text-primary h-5 w-5" />
                  <span className="text-sm font-medium">Growth Report</span>
                </div>
                <ArrowUpRight className="text-muted-foreground h-4 w-4" />
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
