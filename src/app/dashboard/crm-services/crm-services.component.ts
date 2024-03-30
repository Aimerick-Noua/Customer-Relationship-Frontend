import { Component } from '@angular/core';
import { ServicesDialogComponent } from './services-dialog/services-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-crm-services',
  templateUrl: './crm-services.component.html',
  styleUrls: ['./crm-services.component.css']
})
export class CrmServicesComponent {
 services =  [
      {
        "id": 1,
        "icon": "fas fa-desktop",
        "title": "Conception Web",
        "description": "Améliorez votre présence en ligne avec notre expertise en conception web."
      },
      {
        "id": 2,
        "icon": "fas fa-network-wired",
        "title": "Virtualisation des Infrastructures",
        "description": "Optimisez l'efficacité de votre infrastructure informatique grâce à notre expertise en virtualisation."      },
      {
        "id": 3,
        "icon": "fas fa-tools",
        "title": "Maintenance Informatique et Réseaux",
        "description": "Assurez le bon fonctionnement de votre système informatique et de vos réseaux avec notre service de maintenance dédié."      },
      {
        "id": 4,
        "icon": "fas fa-shield-alt",
        "title": "Sécurité",
        "description": "Protégez vos données sensibles et votre infrastructure contre les cybermenaces avec nos solutions de sécurité avancées."
      },
      {
        "id": 5,
        "icon": "fas fa-video",
        "title": "Visioconférence",
        "description": "Collaborez efficacement et en toute sécurité avec vos équipes à distance grâce à notre service de visioconférence."      },
      {
        "id": 6,
        "icon": "fas fa-database",
        "title": "Datacenter",
        "description": "Centralisez et sécurisez vos données avec notre solution de datacenter de pointe."      },
      {
        "id": 7,
        "icon": "fas fa-lightbulb",
        "title": "Conseil et Consulting",
        "description": "Profitez de notre expertise stratégique pour optimiser vos processus informatiques et atteindre vos objectifs commerciaux."      },
      {
        "id": 8,
        "icon": "fas fa-graduation-cap",
        "title": "Formation",
        "description": "Investissez dans le développement de vos équipes avec nos programmes de formation sur mesure."
            }
    ];


    hoverCard(service: any) {
      service.hovered = true;
    }
    
    unhoverCard(service: any) {
      service.hovered = false;
    }
    animal!: string;
    name!: string;
    index!:number;
  
    constructor(public dialog: MatDialog) {}
    openDialog(index: number, title: string): void {
      console.log('Index:', index);
      console.log('Title:', title);
      const dialogRef = this.dialog.open(ServicesDialogComponent, {
        data: { index: index, title: title }
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        // Do something with the result if needed
      });
    }
  
  }
  

