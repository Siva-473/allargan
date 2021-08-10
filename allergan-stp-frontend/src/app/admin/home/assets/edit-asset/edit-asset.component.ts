
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../../models/user';
import { Group } from '../../../model/group';
import { Quize } from '../../../model/Quize';
import { AssetService } from '../../../services/assetservices';
import { GroupService } from '../../../services/groupservice';
import { Search } from 'src/app/admin/model/Search';
import { AlertService } from 'src/app/services';
@Component({
  selector: 'app-edit-asset',
  templateUrl: './edit-asset.component.html',
  styleUrls: ['./edit-asset.component.css']
})
export class EditAssetComponent implements OnInit {
  assetTypeName: any;
  disableSequence: boolean = true;
  error: Boolean = false;
  searchlist:Object[];
  message: string = "";
  showQuize: Boolean = true;
  currentUser: User;
  submitted = false;
  assetForm: FormGroup;
  fileName: string = "Not uploaded";
  title: "";
  assetTypes: { id: 0, userName: "" };
  therapeuticAreas: { id: 0, name: "" };
  products: { id: 0, name: "" };
  diseaseStates: { id: 0, name: "" };
  contentTypes: [{ id: 0, name: "" }];
  sources = [{ id: 0, name: "" }];
  regions: { id: 0, name: "" };
  quizeValue: boolean = true;
  countries: { id: 0, name: "" };
  quizes: [{
    createdBy: 0
    dateCreated: ""
    dateUpdated: ""
    id: 0
    isActive: ""
    jsonData: ""
    status: ""
    timer: ""
    title: ""
    updatedBy: 0
  }];
  alreadyQuiz: Quize = new Quize();
  groups: any = [{ id: 0, name: "" }];
  assets: {
    id: 0, title: "", description: "", status: 0, active: false,
    assetType: { userName: "" },
    quize: {
      createdBy: 0
      dateCreated: ""
      dateUpdated: ""
      id: 0
      isActive: ""
      jsonData: ""
      status: ""
      timer: ""
      title: ""
      updatedBy: 0
    },
    therapeuticArea: { name: "" },
    product: { name: "" },
    diseaseState: { name: "" }
  };
  sharePoint: String = ""
  showQuizDropDown: boolean = false;
  showContentTypeDropDown: boolean = true;
  showUploadAsset: boolean = false;
  showLink: boolean = false;
  showGroup: boolean = true;
  showDSError: boolean = false;
  showProductError: boolean = false;
  showQuizError: boolean = false;
  showcontentTypeError: boolean = false;
  showFileUploadError: boolean = false;
  assetMappedGroups: any = [{ id: 0, name: "" }];
  showLinkError: boolean = false;
  showLinkErrorMsg: String = "Link Required";
  showGroupError: boolean = false;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private alertService:AlertService,
    private route: ActivatedRoute,
    private assetService: AssetService,
    private groupService: GroupService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.route.params.subscribe(params => {
      let assetId: number = params['assetId']
      if (assetId > 0) {
       
        this.assetService.getAsset(assetId, this.currentUser.id).subscribe(asset => {
          this.assets = asset.data;
          this.f.id.setValue(asset.data.id);
          this.assetMappedGroups = asset.data.groups;
          this.removeDuplicateGroups()
          if (asset.data.assetType != null) {
            this.f.assetType.setValue(asset.data.assetType.id);
            this.onSelectAssetType(asset.data.assetType.id);
          }
          if (asset.data.therapeuticArea != null) {
            this.f.therapeuticArea.setValue(asset.data.therapeuticArea.id);
            this.onSelectTherapeuticArea(asset.data.therapeuticArea.id);
          }
          this.f.duration.setValue(asset.data.duration);
          this.f.title.setValue(asset.data.title);
         // alert(asset.data.sequence);
          this.f.searchNumber.setValue(asset.data.sequence)
          this.f.description.setValue(asset.data.description);
          if (asset.data.diseaseState != null) { this.f.diseaseState.setValue(asset.data.diseaseState.id); }
          if (asset.data.product != null) { this.f.product.setValue(asset.data.product.id); }
          if (asset.data.contenetType != null) { this.f.contentType.setValue(asset.data.contenetType); }
          this.f.source.setValue(asset.data.source);
          this.onSelectSource(asset.data.source);
          if (asset.data.source == 4) {
            this.showQuizDropDown= true;
            this.showLink = false;
           // alert(asset.data.fileName);
            this.f.quize.setValue(asset.data.fileName)
          } else if (asset.data.source == 2) {
              this.showLink = true;
          } else {
            this.fileName = asset.data.fileName;
          }
          if (asset.data.region != null) {
            this.f.region.setValue(asset.data.region.id);
            this.onSelectRegion(asset.data.region.id);
          }
          if (asset.data.country != null) { this.f.country.setValue(asset.data.country.id); }
          this.f.expiration.setValue(asset.data.expiryDuartion);
          this.f.awardPoints.setValue(asset.data.awardPoints);
          this.f.mandatory.setValue(asset.data.mandatory);
          if (asset.data.deepLink == null) {
            this.f.deepLink.setValue(" ");
          } else {
            this.f.deepLink.setValue(asset.data.deepLink);
          }
          this.fileName = asset.data.fileName;
          this.f.autoAssin.setValue(asset.data.autoAssignment);
          if (asset.data.autoAssignment) {
            this.showGroup = false;
          }
          this.f.status.setValue(true);
        });
      }
    });
    this.assetService.getAssetTypes().pipe().subscribe(assetTypes => {
      this.assetTypes = assetTypes.data;
      this.assetTypeName = this.assetTypes[0]
    });
    this.assetService.getRegion().pipe().subscribe(regions => {
      this.regions = regions.data;
    });
    this.assetService.getSources().pipe().subscribe(sources => {
      this.sources = sources.data;
      if (this.sources.length >= 0) {
        this.sharePoint = "yes"
      }
    });
    this.assetService.getContentTypes().pipe().subscribe(contentTypes => {
      this.contentTypes = contentTypes.data;
    });
    this.groupService.getGroups().pipe().subscribe(groups => {
      this.groups = groups.data;
    });
  }
  ngOnInit() {
    this.assetForm = this.formBuilder.group({
      id: [0],
      assetType: ['', [Validators.required]],
      therapeuticArea: ['', [Validators.required]],
      duration: [60, [Validators.required]],
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      expiration: [30, [Validators.required, Validators.minLength(1)]],
      awardPoints: [100, [Validators.required]],
      status: [true],
      autoAssin: [false],
      mandatory: [false],
      deepLink: [''],//, [Validators.required]],
      product: [''],//, [Validators.required]], 
      diseaseState: [''],//, [Validators.required]],
      contentType: [''],
      source: ['', [Validators.required, Validators.minLength(1)]],
      region: [''],// [Validators.required]],
      country: [''],//[Validators.required]],
      quize: [''],//, [Validators.required]],
      file: [''],
      searchNumber: ['']
    });

  }
  onSelectAssetType(assetTypeId: any) {
    if (assetTypeId != null && assetTypeId > 0) {
      this.assetService.getTherapeuticAreas(assetTypeId).pipe().subscribe(therapeuticAreas => {
        this.therapeuticAreas = therapeuticAreas.data;
      });
    } else {
      this.therapeuticAreas = null;
      this.diseaseStates = null;
      this.products = null;
      this.f.therapeuticArea.setValue('')
      this.f.product.setValue('');
      this.f.diseaseState.setValue('');
    }
  }
  onSelectTherapeuticArea(therapeuticAreaId: any) {
    if (therapeuticAreaId != null && therapeuticAreaId > 0) {
      this.assetService.getDiseaseStateForTA(therapeuticAreaId).pipe().subscribe(diseaseStates => {
        this.diseaseStates = diseaseStates.data;
      });
      this.assetService.getProductsForTA(therapeuticAreaId).pipe().subscribe(products => {
        this.products = products.data;
      });
    } else {
      this.diseaseStates = null;
      this.products = null;
      this.f.product.setValue('');
      this.f.diseaseState.setValue('');
    }
  }

  onSelectDiseaseState(diseaseStateId: any) {
    this.searchlist=[];
    this.assetForm.get('searchNumber').setValue('');
    this.disableSequence=false;
    if (diseaseStateId != null && diseaseStateId > 0) {
      this.showDSError = false;
      this.showProductError = false;
      this.disableSequence=true;
      return;
    } else if (this.assetForm.value.product == null && this.assetForm.value.product < 0) {
      this.showDSError = true;
      this.showProductError = true;
      return;
    } else {
      this.showDSError = true;
      this.showProductError = true;
    }
  }

  onSelectProduct(productId: any) {
    this.disableSequence=false;
    this.searchlist=[];
    this.assetForm.get('searchNumber').setValue('');
    if (productId != null && productId > 0) {
     // alert("edit");
     // alert(productId);
      this.showDSError = false;
      this.showProductError = false;
      this.disableSequence=true;
      return;
    } else if (this.assetForm.value.diseaseState == null && this.assetForm.value.diseaseState < 0) {
      this.showDSError = true;
      this.showProductError = true;
      return;
    } else {
      this.showDSError = true;
      this.showProductError = true;
    }
  }

  onSelectQuiz(quizId: any) {

    if (quizId == undefined && quizId != null) {
      ////alert(quizId);
      // this.fileName=String(quizId);
      //this.showQuizError = false;
      //return;
    }
    //this.showQuizError = true;
  }
  onSelectRegion(regionId: any) {
    this.assetService.getCountries(regionId).pipe().subscribe(countries => {
      this.countries = countries.data;
    });
  }
  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.assetForm.get('file').setValue(file);
      this.fileName = file.name;
      this.quizeValue = false;
      this.assetForm.get('contentType').setValue(this.contentTypes.find(x => x.name == this.fileName.split('.').pop()).id);
      this.showFileUploadError = false;
    }
  }

  onSelectSource(sourceId: number) {
    this.sharePoint = ""
    //this.alreadyQuiz=undefined;
    this.showQuize = true;
    this.quizeValue = false;
    if (sourceId != undefined && sourceId != null) {
      if (this.sources.find(x => x.id == sourceId)) {
        if (this.sources.find(x => x.id == sourceId).name === "Quiz") {
          this.showQuize = false;
          this.assetForm.get('file').setValue('');
          this.fileName = "Not uploaded";
          this.quizeValue = true;

        }
      
        if (this.sources.find(x => x.id == sourceId).name === "Box") {
        
          this.sharePoint = "yes"
          this.assetForm.get('file').setValue('');
          this.fileName = "Not uploaded";
          this.quizeValue = false;
          this.showLink = true;
          // this.alreadyQuiz=undefined;
        }
      }
    }
    this.showQuizDropDown = false;
    this.showLink = false;
    if (sourceId == 4) {
      this.showContentTypeDropDown = false;
      this.showQuizDropDown = true;
      this.showUploadAsset = false;
      this.showLink = false;
      this.route.queryParams.subscribe(params => {
        this.assetService.getQuizes().pipe().subscribe(quizes => {
        //  alert(JSON.stringify(quizes.data));
          this.quizes = quizes.data;
          if (this.assets != undefined && this.assets.quize != null) {
            this.alreadyQuiz = this.quizes.find(x => x.id == this.assets.quize.id);
            this.assetForm.get('file').setValue('');
            this.fileName = "Not uploaded";
            this.quizeValue = true;
            //  this.showLink = false;
            this.showUploadAsset = false;
          }
        });
        return;
      });
    } else if (sourceId == 2) {
      this.showQuizDropDown = false;
      this.showUploadAsset = false;
      this.showLink = true;
      this.showContentTypeDropDown = false;
      this.f.contentType.setValue('');
      return;
    }
    this.showUploadAsset = true;
    this.showContentTypeDropDown = true;
    this.showcontentTypeError = (this.assetForm.value.contentType.length == 0 && this.submitted);
  }

  onClickAutoAssign(flag: boolean) {
    this.showGroup = !flag;
  }
  onChangeLink(link: String) {
    if (link.length == 0) {
      this.showLinkError = true;
      this.showLinkErrorMsg = "Link Required";
      return;
    } else if (link.length < 3) {
      this.showLinkError = true;
      this.showLinkErrorMsg = "Link Minimum 3 Charecters";
      return;
    } else if (link.length > 250) {
      this.showLinkError = true;
      this.showLinkErrorMsg = "Link Maximum 250 Charecters";
      return;
    } else {
      this.showLinkError = false;
    }
  }
  pushRight(group: Group) {
    this.assetMappedGroups.push(group);
    this.groups = this.groups.filter((ele) => { return ele['name'] != group.name; });
    this.showGroupError = false;
  }
  pushLeft(group: Group) {
    this.groups.push(group);
    this.assetMappedGroups = this.assetMappedGroups.filter((ele) => { return ele['name'] != group.name; });
    if (this.assetMappedGroups.length < 2) {
      this.showGroupError = true;
    }

  }

  removeDuplicateGroups() {
    for (var i = this.assetMappedGroups.length - 1; i >= 0; i--) {
      for (var j = 0; j < this.groups.length; j++) {
        if (this.assetMappedGroups[i] && (this.assetMappedGroups[i]['name'] === this.groups[j]['name'])) {
          this.groups.splice(j, 1);
        }
      }
    }
  }

  get f() { return this.assetForm.controls; }

  onSubmit() {
    this.error = false;
    if (this.assetForm.invalid) {
      this.submitted = true;
      if ((this.assetForm.value.diseaseState.length == 0) && (this.assetForm.value.product.length == 0)) {
        this.showDSError = true;
        this.showProductError = true;
      }
      if (this.showContentTypeDropDown && this.assetForm.value.contentType.length == 0) {
        this.showcontentTypeError = true;
      }
      if (this.showUploadAsset && this.assetForm.value.file.length == 0 && this.fileName.includes("Not uploaded")) {
        this.showFileUploadError = true;
      }
      if (this.showLink) {
        let link = this.assetForm.value.deepLink;
        if (link.length == 0) {
          this.showLinkError = true;
          this.showLinkErrorMsg = "Link Required";
          return;
        } else if (link.length < 3) {
          this.showLinkError = true;
          this.showLinkErrorMsg = "Link Minimum 3 Charecters";
          return;
        } else if (link.length > 250) {
          this.showLinkError = true;
          this.showLinkErrorMsg = "Link Maximum 250 Charecters";
          return;
        } else {
          this.showLinkError = false;
        }
      }
      return;
    }
    if ((this.assetForm.value.diseaseState.length == 0) && (this.assetForm.value.product.length == 0)) {
      this.submitted = true;
      this.showDSError = true;
      this.showProductError = true;
      return;
    }
    if (this.showUploadAsset && this.assetForm.value.file.length == 0 && (this.fileName == "Not uploaded")) {
      if (this.showQuize == false) {
      } else {
        this.submitted = true;
        this.showFileUploadError = true;
        return;
      }

    }

    if (this.showLink) {
      this.submitted = true;
      let link = this.assetForm.value.deepLink;
      if (link.length == 0) {
        this.showLinkError = true;
        this.showLinkErrorMsg = "Link Required";
        return;
      } else if (link.length < 3) {
        this.showLinkError = true;
        this.showLinkErrorMsg = "Link Minimum 3 Charecters";
        return;
      } else if (link.length > 250) {
        this.showLinkError = true;
        this.showLinkErrorMsg = "Link Maximum 250 Charecters";
        return;
      } else {

        this.showLinkError = false;
      }
    }
    if (!this.assetForm.value.autoAssin && this.assetMappedGroups.length < 1) {
      this.submitted = true;
      this.showGroupError = true;
      return;
    }
    let formData = new FormData();
    formData.append('id', this.assetForm.value.id);
    let userid = this.currentUser.id;
    var stringForm = userid.toString();
    formData.append('userId', stringForm);
    formData.append('assetType', this.assetForm.value.assetType);
    formData.append('duration', this.assetForm.value.duration);
    formData.append('title', this.assetForm.value.title);
    formData.append('therapeuticArea', this.assetForm.value.therapeuticArea);
    formData.append('description', this.assetForm.value.description);
    formData.append('diseaseState', this.assetForm.value.diseaseState);
    if (this.quizeValue == true) {
      let quiz = "quiz";
      this.assetForm.get('contentType').setValue(this.contentTypes.find(x => x.name == quiz).id);

    }
    if (this.sharePoint == "yes") {
      if (this.contentTypes.find(x => x.name == String("link"))) {
        this.assetForm.get('contentType').setValue(this.contentTypes.find(x => x.name == String("link")).id);
      }
    }
    formData.append('contenetType', this.assetForm.value.contentType);
    formData.append('product', this.assetForm.value.product);
    formData.append('source', this.assetForm.value.source);
    formData.append('region', this.assetForm.value.region);
    //formData.append('deepLink', this.assetForm.value.deepLink);
    formData.append('country', this.assetForm.value.country);
    formData.append('expiration', this.assetForm.value.expiration);
    formData.append('awardPoints', this.assetForm.value.awardPoints);
    formData.append('mandatory', this.assetForm.value.mandatory);
    formData.append('status', this.assetForm.value.status);
    formData.append('autoAssin', this.assetForm.value.autoAssin);
     // alert(this.assetForm.value.searchNumber);
      if(this.assetForm.value.searchNumber==null){
      
        formData.append('searchNumber','');
      }
      else{
        formData.append('searchNumber',this.assetForm.value.searchNumber);
      }
   
    if (this.alreadyQuiz.id == undefined) {
      formData.append('quize', "");
    } else {
      formData.append('quize', String(this.alreadyQuiz.id));
    }
    if (this.fileName == "Not uploaded" && this.alreadyQuiz.id != undefined && this.sharePoint != "yes") {
      formData.append('deepLink', " ");
      formData.append('fileName', String(this.alreadyQuiz.id));
    } else if (this.fileName == "Not uploaded" && this.alreadyQuiz.id != undefined && this.sharePoint == "yes") {
      formData.append('deepLink', this.assetForm.value.deepLink);
      formData.append('fileName', "Not uploaded");
    }
    else if (this.fileName != "Not uploaded" && this.alreadyQuiz.id == undefined && this.sharePoint == "yes") {
      formData.append('deepLink', this.assetForm.value.deepLink);
      formData.append('fileName', "Not uploaded");
    }
    else if (this.fileName == "Not uploaded" && this.alreadyQuiz.id == undefined && this.sharePoint == "yes") {
      formData.append('deepLink', this.assetForm.value.deepLink);
      formData.append('fileName', "Not uploaded");
    }
    else {
      formData.append('deepLink', " ");
      formData.append('fileName', this.fileName);
    }
    formData.append('file', this.assetForm.value.file);
    if (!this.assetForm.value.autoAssin) {
      this.assetMappedGroups.forEach(i => {
        formData.append('mappedGroupIds[]', i.id.toString());
      })
    }
    this.error = false;
    this.message = "";
    // if(this.assetForm.value.searchNumber==='' || this.assetForm.value.searchNumber===undefined || this.assetForm.value.searchNumber===' '){
    //   this.error = true;
     
    //   this.message = "Please enter sequence number!!!"
    // }
    // else
   
     if ((this.fileName == "Not uploaded" && this.alreadyQuiz.id == undefined) && this.sharePoint == "") {
      this.error = true;
      this.message = "Please enter qize"
    }
    else {
      console.log(this.assetForm.value.contentType);
      this.assetService.addAsset(formData).pipe().subscribe(asset => {
        this.router.navigate(['/admin/asset']);
      },error=>{
        this.alertService.error(error);
        window.scroll(0,0);
      });

    }
  }


  fetchItemDetailsSearch(idNumber: String) {
   // alert(idNumber);
    if (idNumber == undefined || idNumber === null || idNumber == '' || idNumber == ' ') { this.searchlist = []; return; }
    if (this.assetForm.value.diseaseState === '' || this.assetForm.value.diseaseState === undefined || this.assetForm.value.diseaseState === ' ') this.assetForm.get('diseaseState').setValue(0);
    if (this.assetForm.value.product === '' || this.assetForm.value.product === undefined || this.assetForm.value.product === ' ') this.assetForm.get('product').setValue(0);
    let search = new Search(this.assetForm.value.assetType, this.assetForm.value.therapeuticArea, this.assetForm.value.diseaseState, this.assetForm.value.product);
    this.assetService.fechDetails(Number(idNumber), search).pipe().subscribe(data => {
      this.searchlist = data.data;
      console.log(this.searchlist)
    });

  }
}
