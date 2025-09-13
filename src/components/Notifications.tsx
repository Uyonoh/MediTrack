import { CircleAlert, TriangleAlert, Info } from "lucide-react";

interface Notification {
    type: "Critical Alert" | "Warning" | "System Update";
    message: string;
}

function Alert(notification: Notification) {
    let icon;

    if (notification.type === "Critical Alert"){
        icon = <CircleAlert color="#ff0000" />;
    } else if (notification.type === "Warning") {
        icon = <TriangleAlert color="#ff8000" />;
    } else {
        icon = <Info />;
    }

    return (
        <div className="notification grid grid-cols-5 p-4">
            <div className="notification-icon">
                {icon}
            </div>
            <div className="message col-span-4 flex flex-col">
                <span className="font-bold ">{notification.type}</span>
                <span>{notification.message}</span>
            </div>
        </div>
    )
}

function Notifications() {
    const criticalAlerts: string[] = [
        "Paracetamol stock below threshold",
    ]
    const Warnings: string[] = [
        "5 items expiring in the next 7days",
    ]
    const systemUpdates: string[] = [
        "New sales report is available",
    ]
    return (
        <div className="col-span-4 notifications p-4 m-4 border-l">
            <h4>Notifications</h4>
            {criticalAlerts.map((alert) => {
                return <Alert type="Critical Alert" message={alert} />
            })}

            {Warnings.map((alert) => {
                return <Alert type="Warning" message={alert} />
            })}

            {systemUpdates.map((alert) => {
                return <Alert type="System Update" message={alert} />
            })}
        </div>
    )
}

export default Notifications;